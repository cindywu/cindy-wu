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

export function useNoteByID(reflect: Reflect<M>, id: string) {
  return useSubscribe(
    reflect,
    async (tx) => {
      return await getNote(tx, id);
    },
    null
  );
}
