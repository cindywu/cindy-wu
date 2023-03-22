import type { WriteTransaction } from "@rocicorp/reflect";
import {
  initClientState
} from "./client-state";

export type M = typeof serverMutators;

export const serverMutators = {
  initClientState,
  nop: async (_: WriteTransaction) => {},
};

export const clientMutators: M = {
  ...serverMutators,
};
