import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../objects/card";
import { default as FullCard } from "../Card/Card";
import { faX } from "@fortawesome/free-solid-svg-icons";

type ClosePopout = (b: boolean) => void
interface CardPopoutProps {
  open: boolean,
  card: Card,
  closePopout: ClosePopout
}

export default function CardPopout(
  { open, card, closePopout }: CardPopoutProps
) {
  if (!open) return null;

  return (
    <div className="card-popout">
      <button onClick={() => closePopout(false)}>
        <FontAwesomeIcon icon={faX} size="xs" />
      </button>
      <FullCard card={card} />
    </div>
  )
}