import { Set } from "../objects/sets"

export function isInSet(setFromNotes: string, currentSet: Set): boolean{
  return setFromNotes as Set === currentSet;
}