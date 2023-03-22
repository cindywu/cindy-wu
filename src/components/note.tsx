import React from 'react'
import { useNoteIDs, useNoteByID } from '../datamodel/subscriptions'
import Link from 'next/link'
import { dateInWords } from '../util/dateInWords'

export default function Note({reflect}:any) {
  const ids = useNoteIDs(reflect)
  return (
    <div className={"w-screen h-screen overflow-auto dark:bg-zinc-800 dark:text-zinc-300"}>
    <div className={"p-4 max-w-md"}>
      <div className={"text-2xl pb-4 font-medium"}>
        <Link className={"no-underline"} href="/">
          Cindy Wu
        </Link>
        <span className={"text-zinc-500"}> › Notes</span></div>
        <div className={""}>
        {ids && ids.map((id:any) => {
          return (
          <NoteTitle
            key={id}
            noteID={id}
            reflect={reflect}
          />
        )})}
      </div>
    </div>
  </div>
  )
}

function NoteTitle({noteID, reflect}: {noteID: string, reflect:any}){
  const note : any = useNoteByID(reflect, noteID)

  return (
    <div className={"py-4"}>
      <div className={"text-xs"}>{note && dateInWords(new Date(note.date))}</div>
      <div>{note && note.content}</div>
    </div>
  )
}

