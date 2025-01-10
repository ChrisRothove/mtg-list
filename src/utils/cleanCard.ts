import { Card, DirtyCard } from "../objects/card";

// cleans card data from my Notes app
export function cleanCard(inputObj: DirtyCard): Card {
  return {
    name: inputObj.Name,
    color: inputObj.Color,
    cost: inputObj.Cost,
    cmc: parseInt(inputObj.cmc) || 0,
    rules: inputObj.Rules,
    flavor: inputObj.Flavor,
    mechanics: cleanList(inputObj.Mechanics),
    powerTough: inputObj["P/T"],
    superType: inputObj["Super Type"],
    subType: inputObj["Sub Type"],
    set: cleanList(inputObj.Set)
  }
}

function cleanList(inputStr: string): string {
  const list: Array<string> = inputStr.split(",");
  const newList: Array<string> = list.map((item: string) => item.split("(")[0].trim());
  return newList.join(", ");
}