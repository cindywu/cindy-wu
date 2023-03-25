import React from 'react'
import { useFlatNotes } from '../datamodel/subscriptions'
import Link from 'next/link'
import { dateInWords } from '../util/dateInWords'

export default function Note({reflect}:any) {
  const notes = useFlatNotes(reflect)

  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
    <div className={"p-4 max-w-md"}>
      <div className={"text-2xl pb-4 font-medium"}>
        <Link className={"no-underline"} href="/">
          Cindy Wu
        </Link>
        <span className={"text-zinc-500"}> › Notes</span></div>
        <div className={""}>
        {notes && notes.map((note:any) => {
          return (
          <NoteTitle
            key={note.id}
            note={note}
          />
        )})}
      </div>
    </div>
  </div>
  )
}

function NoteTitle({note}: {note: any}){

  return (
    <div className={"py-4"}>
      <div className={"text-xs"}>{note && dateInWords(note.date)}</div>
      <div>{note && note.content}</div>
    </div>
  )
}

