import type { Reflect } from "@rocicorp/reflect";
import { useSubscribe } from "replicache-react";
import type { M } from "./mutators";
import { getNote, notePrefix } from "./note";

export function useNoteIDs(reflect: Reflect<M>) {
  return useSubscribe(
    reflect,
    async (tx) => {
      const notes = (await tx
        .scan({ prefix: notePrefix })
        .keys()
        .toArray()) as string[];
      return notes.map((k) => k.substring(notePrefix.length));
    },
    []
  );
}

export function useFlatNotes(reflect: Reflect<M>) {
  const notes : any = useNotes(reflect)
  let parsedNotes: any[] = []
  notes.map(([k, v]: [string, any]) => {
    const changes = {
      date:  new Date(v.date)
    }
    let value = {...v, ...changes}
    Object.assign(value, { id: k.substring(notePrefix.length )})
    parsedNotes.push(value)
  })
  const sortedNotes = parsedNotes.sort((a, b) => b.date - a.date)
  return sortedNotes
}

export function useNotes(reflect: Reflect<M>) {
  return useSubscribe(
    reflect,
    async(tx) => {
      const items = await tx.scan({ prefix: notePrefix }).entries().toArray();
      return items
    },
    []
  )
}


export function useNoteByID(reflect: Reflect<M>, id: string) {
  return useSubscribe(
    reflect,
    async (tx) => {
      return await getNote(tx, id);
    },
    null
  );
}
