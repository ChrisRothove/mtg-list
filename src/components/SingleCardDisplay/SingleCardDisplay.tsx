import { Card } from "../../objects/card";
import { useSingleCardDisplay } from "./hooks/useSingleCardDisplay";
import {default as FullCard} from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SettingBlock from "../SettingBlock/SettingBlock";
import { Display } from "../../objects/displayOptions";

type UpdateDisplay = (e: React.ChangeEvent<HTMLSelectElement>) => void;
interface SingleCardDisplayProps {
  cardList: Card[],
  updateDisplay: UpdateDisplay
}

export default function SingleCardDisplay({ cardList, updateDisplay }: SingleCardDisplayProps) {
  const {
    card,
    next,
    previous,
    inputProps
  } = useSingleCardDisplay(cardList);

  return (
    <div className="mobile-content">
      <SettingBlock
        options={Object.values(Display)}
        defaultValue={Display.Single as string}
        blockLabel='Display'
        updateFn={updateDisplay}
      />
      <FullCard card={card} />
      <div className='single-card-nav'>
        <button onClick={previous}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <input {...inputProps}></input>
        <span>/ {inputProps.max}</span>
        <button onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}