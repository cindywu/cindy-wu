import type { ReadTransaction } from "@rocicorp/reflect";
import { nanoid } from "nanoid";
import { z } from "zod";

export const statusSchema = z.object({
  type: z.literal("status"),
  content: z.string(),
  date: z.string(),
});

export type Status = z.infer<typeof statusSchema>;

export async function getStatus(
  tx: ReadTransaction,
  id: string
): Promise<Status | null> {
  const jv = await tx.get(key(id));
  if (!jv) {
    console.log(`Specified status ${id} not found.`);
    return null;
  }
  return jv as Status;
}

function key(id: string): string {
  return `${statusPrefix}${id}`;
}

export const statusPrefix = "status-";

export function randomStatus() {
  return {
    id: nanoid(),
    status: {
      type: "status",
      content: "thinking",
      date: new Date().toISOString(),
    } as Status,
  };
}
