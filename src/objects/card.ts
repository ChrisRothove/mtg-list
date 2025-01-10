export interface Card {
  name: string,
  color: string,
  cost: string,
  cmc: number,
  rules: string,
  flavor: string,
  powerTough: string,
  superType: string,
  subType: string,
  mechanics: string,
  set: string
}

export interface DirtyCard {
  "Name": string,
  "Color": string,
  "Commander": string,
  "Cost": string,
  "Deck": string,
  "Flavor": string,
  "Mechanics": string,
  "P/T": string
  "Rules": string,
  "Set": string,
  "Sub Type": string,
  "Super Type": string
}