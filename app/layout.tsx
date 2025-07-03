import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import {SessionProvider} from "next-auth/react"
import { auth } from "@/auth";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: "Aurae",
  description:
    "Aurae is like a manifestation portal where you can unlock your 6th sense",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session=await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body
        className={`${ibmPlexSans.className} my font bebas nue in my global. css -@theme {   /* Custom radius /   --radius: 0.5rem;    / Fonts /   --font-ibm-plex-sans: "IBM Plex Sans", sans-serif;   --font-bebas-neue: "Bebas Neue", sans-serif;    / Breakpoints */   --breakpoint-xs: 480px;- is acttually suppposed to be a varialble -const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={${ibmPlexSans.className} ${bebasNeue.variable} antialiased}
      > antialiased`}
      >
        {children}
        <Toaster />
      </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
