import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <section className='w-full rounded-2xl bg-white p-7'>
        <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-semibold text-xl">   All Books </div>
            <Button className="bg-primary-admin text-white " asChild>
                <Link href="/admin/book/new"> + Create a New Book</Link>

                </Button>

        </div>
        <div className="mt-7 w-full overflow-hidden">
            <p>table </p>
        </div>
      
    </section>
  )
}

export default Page