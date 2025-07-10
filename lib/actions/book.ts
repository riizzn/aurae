"use server";

import dayjs from "dayjs";
import { db } from "@/database/drizzle";
import { books, borrowRecords } from "@/database/schema";
import { eq } from "drizzle-orm";

export const borrowBook = async (params: BorrowBookParams) => {
  const { userId, bookId } = params;

  try {
    const book = await db
      .select({ availbleCopies: books.availableCopies })
      .from(books)
      .where(eq(books.id, bookId))
      .limit(1);

    if (!book.length || book[0].availbleCopies < 1) {
      return {
        success: false,
        error: "book is not available for borrowing",
      };
    }
    const dueDate = dayjs().add(7, "day").toDate().toDateString();
    const record = db
      .insert(borrowRecords)
      .values({ userId, bookId, dueDate, status: "BORROWED" });
    await db
      .update(books)
      .set({ availableCopies: book[0].availbleCopies - 1 })
      .where(eq(books.id, bookId));
    return {
      success: true,
      data: JSON.parse(JSON.stringify(record)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "an error occured while borrowing the book",
    };
  }
};
