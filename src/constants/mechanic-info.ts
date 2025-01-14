import { Set } from "../objects/sets";

export interface Mechanic {
  title: string,
  body: string
}

export const MECHANICS = {
  [Set.Daydream as string]: [
    {
      title: "Sponsored",
      body: "When this permanent enters, it's controller may tap a permanent of the sponsoring color. If they do, it is sponsored until it leaves the battlefield."
    },
    {
      title: "Ambassador",
      body: "When this creature enters, choose an opponent to gain control of it. It can't attack its owner and its activated abilities can be activated by either its owner or its controller."
    },
    {
      title: "Charity", 
      body: "If an opponent controls a permanent you own, you get the city's blessing for the rest of the game."
    }
  ],
  [Set.Hivemind as string]: []
}