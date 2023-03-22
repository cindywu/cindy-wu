import React from 'react'
import Link from 'next/link'

export default function Books() {
  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
    <div className={"p-4 max-w-md"}>
      <div className={"text-2xl pb-4 font-medium"}>
        <Link className={"no-underline"} href="/">
          Cindy Wu
        </Link>
        <span className={"text-zinc-500"}> › Books</span></div>
        <div className={"font-bold"}>Staples</div>
        <Book
          bookName={"If you want to write"}
        />
        <Book
          bookName={"The seven laws of money"}
        />
        <Book
          bookName={"Elements of style"}
        />
        <div className={"font-bold"}>Autobiographies</div>
        <Book
          bookName={'I want to be a mathematician'}
        />
        <Book
          bookName={'Starting point'}
        />
    </div>
    </div>
  )
}

function Book({bookName}: {bookName: string}) {
  return (
    <div>
      {bookName}
    </div>
  )
}


