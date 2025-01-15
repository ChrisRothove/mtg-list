import { Card } from "../../objects/card";
import { useSingleCardDisplay } from "./hooks/useSingleCardDisplay";
import {default as FullCard} from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface SingleCardDisplayProps {
  cardList: Card[],
  children?: React.ReactNode,
  currentCard?: Card
}

export default function SingleCardDisplay(
  { cardList, children, currentCard }: SingleCardDisplayProps
) {
  const {
    card,
    next,
    previous,
    inputProps
  } = useSingleCardDisplay(cardList);

  return (
    <div className="mobile-content">
      {children}
      <FullCard card={currentCard || card} />
      {!currentCard && <div className='single-card-nav'>
        <button onClick={previous}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <input {...inputProps}></input>
        <span>/ {inputProps.max}</span>
        <button onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>}
    </div>
  )
}