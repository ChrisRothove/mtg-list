import { Card } from "../../../objects/card";
import { CARDLIST } from "../../../constants/card-list-master";
import { Set } from "../../../objects/sets";
import { cleanCard } from "../../../utils/cleanCard";
import { isInSet } from "../../../utils/isInSet";

export function useCardList(set: Set): Card[] {
  const cleanList: Card[] = CARDLIST.map((card) => cleanCard(card));
  const filteredList: Card[] = cleanList.filter((card) => isInSet(card.set, set))
  return filteredList
}