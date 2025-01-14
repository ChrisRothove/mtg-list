import { Card } from "../../objects/card"
import { Display } from "../../objects/displayOptions";
import ManaSymbols from "../ManaSymbol/ManaSymbol"
import SettingBlock from "../SettingBlock/SettingBlock";

type UpdateDisplay = (e: React.ChangeEvent<HTMLSelectElement>) => void;
interface MobileListDisplayProps {
  cardList: Card[],
  updateFn: UpdateDisplay
}

export default function MobileListDisplay({ cardList, updateFn }: MobileListDisplayProps) {
  return (
    <div className="mobile-content">
      <SettingBlock
        options={Object.values(Display)}
        defaultValue={Display.List as string}
        blockLabel="Display"
        updateFn={updateFn}
      />
      {cardList.map((card: Card) => {
        return (
          <div className="list-card">
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
    </div>
  )
}