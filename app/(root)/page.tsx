import BookList from '@/components/ui/BookList'
import BookOverview from '@/components/ui/BookOverview'
import { Button } from '@/components/ui/button'
import React from 'react'
import { sampleBooks } from '../constants'

const Home = () => {
  return (
    <>
    <BookOverview {...sampleBooks[0]}/>
    <BookList
     title="Latest Books"
     books={sampleBooks}
     containerClassName="mt-28"
    />
    </>
    
  )
}

export default Home