import ManaSymbols from "../ManaSymbol/ManaSymbol";
import { Card as CardType } from "../../objects/card";
import Paragraphy from "../Paragraphy/Paragraphy";

interface CardProps {
  card: CardType
}

export default function Card({card}: CardProps) {
  return (
    <div className="card">
      <div className='card-header'>
        <h3 className='card-name'>{card.name}</h3>
      </div>
      <ManaSymbols cost={card.cost} isVertical/>
      <div className='type-line'>
        {card.superType}
        {card.subType ?  <span> &mdash; {card.subType}</span> : ''}
      </div>
      <div className='rules-text'>
        <Paragraphy text={card.rules} />
        {card.flavor && (
          <>
            <hr></hr>
            <Paragraphy text={card.flavor} />
          </>
        )}
      </div>
    </div>
  )
}