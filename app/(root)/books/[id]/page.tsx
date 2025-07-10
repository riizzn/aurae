import { auth } from "@/auth";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import BookVideo from "@/components/BookVideo";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session =await auth();
  const latestBooks=(await db.select().from(books).limit(6).orderBy(desc(books.createdAt))) as Book[]

  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1);

    if(!bookDetails) redirect('/404')

  return <>
  <BookOverview {...bookDetails} userId={session?.user?.id as string}/>

  <div className="book-details">
    <div className="flex-[1.5] w-2/3">
        <section className="flex flex-col gap-7">
            <h3 >Video</h3>
            <BookVideo videoUrl={bookDetails.videoUrl}/>
            

        </section>
        <section className="mt-10 flex flex-col gap-7">
            <h3 >Summary</h3>
            <div className="space-y-5 text-xl text-light-100">
                {bookDetails.summary}

            </div>


        </section>
       
    </div>
     <section className="w-1/3 flex flex-col gap-7">
         <h3 >More similar books</h3>
          <BookList
        title=""
        books={latestBooks.filter(book=> book.id !== bookDetails.id)}
        containerClassName=""
      />



        </section>
  </div>
  </>;
};

export default Page;
