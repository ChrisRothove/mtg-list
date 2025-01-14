import { useState } from "react";
import { Card } from "../../objects/card"
import { Display } from "../../objects/displayOptions";
import ManaSymbols from "../ManaSymbol/ManaSymbol"
import SettingBlock from "../SettingBlock/SettingBlock";
import CardPopout from "../CardPopout/CardPopout";

type UpdateDisplay = (e: React.ChangeEvent<HTMLSelectElement>) => void;
interface MobileListDisplayProps {
  cardList: Card[],
  updateFn: UpdateDisplay
}

export default function MobileListDisplay({ cardList, updateFn }: MobileListDisplayProps) {
  
  const [selectedCard, setSelectedCard] = useState(cardList[0]);
  const [popoutOpen, setPopoutOpen] = useState(false);
  const open = (index: number) => {
    setSelectedCard(cardList[index]);
    setPopoutOpen(true);
  }
  
  return (
    <div className="mobile-content">
      <SettingBlock
        options={Object.values(Display)}
        defaultValue={Display.List as string}
        blockLabel="Display"
        updateFn={updateFn}
      />
      {cardList.map((card: Card, index: number) => {
        return (
          <div className="list-card" onClick={() => open(index)}>
            <div className="title-line">
              <h2>{card.name}</h2>
              <ManaSymbols cost={card.cost} />
            </div>
            <i>
              {card.superType}
              {
                card.subType
                  ? <span> &mdash; {card.subType}</span>
                  : ''
              }
            </i>
          </div>
        )
      })}
      {popoutOpen && <div className="fade"></div>}
      <CardPopout
        open={popoutOpen}
        card={selectedCard}
        closePopout={setPopoutOpen}
      />
    </div>
  )
}