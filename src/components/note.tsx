import React, { useState, useRef } from 'react'
import { useNoteIDs, useNoteByID } from '../datamodel/subscriptions'
import { randomNote } from '../datamodel/note'

export default function Note({reflect}:any) {
  console.log('reflect', reflect)
  const ids = useNoteIDs(reflect)
  console.log('ids', ids)

  const inputRef = useRef<HTMLInputElement>(null)

  const [noteDrafter, setNoteDrafter] = useState<boolean>(false)

  // function doSomething(){
  //   console.log('do something')
  //   const note = randomNote()
  //   console.log('note', note)
  //   reflect.mutate.createNote(note)
  // }

  function sendNote(){
    const note : any = randomNote()
    note.note.content = inputRef.current?.value
    console.log('send note note', note)
    reflect.mutate.createNote(note)

  }
  return (
    <div className={"bg-slate-800 text-white "}>
      {noteDrafter && <div><input ref={inputRef}></input><button onClick={() => sendNote()}>send note</button></div>}
      <div onClick={() => setNoteDrafter(!noteDrafter)}>make a note</div>
      {/* <div>
        hi
        <input/>
        <button onClick={() => doSomething()}>submit</button>
      </div> */}
      {ids && ids.map((id:any) => {
        return (
        <NoteTitle
          key={id}
          noteID={id}
          reflect={reflect}
        />
      )
      })
      }
    </div>
  )
}

function NoteTitle({noteID, reflect}: {noteID: string, reflect:any}){
  const [editable, setEditable] = useState<boolean>(false)
  // const [contentValue, setContentValue] = useState<string>('')
  const note : any = useNoteByID(reflect, noteID)
  console.log({note})

  return (
    <div>
      {/* <div>{noteID.slice(0,6)}</div> */}
      {editable ?
      <div>
        <EditTheThing
          content={note && note.content}
          reflect={reflect}
          noteID={noteID}
        />
      </div>
      :
      <div onClick={() => setEditable(!editable)}>{note && note.content}</div>
      }
    </div>
  )
}

function EditTheThing({content,reflect,noteID}: any){

  return (
    <>
    <input
          value={content}
          onChange={(e) => reflect.updateNoteContent({id: noteID, content: e.target.value})}
        />

</>

  )

}