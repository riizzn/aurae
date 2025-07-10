"use client";
import Image from "next/image";
import { toast } from "sonner";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
// Import or define the borrowBook function

 import { borrowBook } from "../lib/actions/book";

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  userId,
  bookId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const handleBorrow = async () => {
    if (!isEligible) {
      toast.error("You are not eligible", {
        description: message,
      });
      return;
    }
    setBorrowing(true);
    try {
        const result=await borrowBook({bookId, userId});
        if(result.success){
            toast.success("Book borrowed successfully", {
        description: "book borrowed sucessfully",
      });
      router.push('/my-profile')
        }
        else{
            toast.error("error",{
                description:result.error,
            })

        }



    } catch (error) {
      toast.error("An error occurred while borrowing the book.", {
        description: error instanceof Error ? error.message : String(error),
      });
    }finally{
        setBorrowing(false)
    }
  };

  return (
    <Button className="book-overview_btn" onClick={handleBorrow} disabled={borrowing}>
      <Image src="/icons/book.svg" alt="book" height={20} width={20} />
      <p className="font-bebas-neue text-xl text-dark-100">{borrowing ? 'Borrowing...' : 'Borrow Book'}</p>
    </Button>
  );
};

export default BorrowBook;
