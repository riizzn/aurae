"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5 ">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="aurae" width={100} height={100} />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "cursor-pointer text-base capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            {" "}
            Library
          </Link>
        </li>
        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className="bg-purple-300">
                {getInitials(session?.user?.name || "IN ")}
              </AvatarFallback>
            </Avatar>
            
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
