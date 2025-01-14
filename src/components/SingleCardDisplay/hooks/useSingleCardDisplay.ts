import { useState } from "react";
import { Card } from "../../../objects/card";

export function useSingleCardDisplay(cardList: Card[]) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const listMax = cardList.length;
    const card = cardList[currentCardIndex];
  
    const next = () => setCurrentCardIndex(prev => {
      const nextIndex = prev + 1;
      if (nextIndex > listMax) {
        return listMax
      } else {
        return nextIndex
      }
    })
  
    const previous = () => setCurrentCardIndex(prev => {
      const nextIndex = prev - 1;
      if (nextIndex < 0) {
        return 0
      } else {
        return nextIndex
      }
    })
  
    const setCardValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value) - 1;
      if (newValue > listMax) {
        setCurrentCardIndex(listMax);
        return;
      } else if (newValue < 0) {
        setCurrentCardIndex(0);
        return;
      }
      setCurrentCardIndex(newValue)
    }
  
  return {
    card,
    next,
    previous,
    inputProps: {
      type: "number",
      max: listMax + 1,
      min: 0,
      value: currentCardIndex + 1,
      onChange: setCardValue
    }
  }
}