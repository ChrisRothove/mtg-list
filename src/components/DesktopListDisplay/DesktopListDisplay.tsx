import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../objects/card";
import { useTablePagination } from "../DesktopLayout/hooks/useTablePagination";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

type SetCurrentCard = (n: number) => void;
interface DesktopListProps {
  cardList: Card[],
  setCurrentCard: SetCurrentCard
}

export default function DesktopListDisplay(
  { cardList, setCurrentCard }: DesktopListProps
) {
  
  const {
    page,
    maxPages,
    nextPage,
    prevPage,
    disableNext,
    disablePrev,
    paginatedCardList
  } = useTablePagination(cardList);

  return (
    <div className="two-up-right">
      <table className="full-card-table">
        <tr className="table-header">
          <th>Name</th>
          <th>Cost</th>
          <th>Type</th>
        </tr>
        {paginatedCardList.map((card, index: number )=> {
          return (
            <tr
              key={card.name}
              onClick={() => setCurrentCard(index)}
            >
              <td>{card.name}</td>
              <td>{card.cost}</td>
              <td>
                {card.superType}
                {card.subType &&
                  <span> &mdash; {card.subType}</span>}
              </td>
            </tr>
          )
        })}
      </table>
      <div className='single-card-nav'>
        <button
          onClick={() => prevPage()}
          disabled={disablePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span>{page} / {maxPages}</span>
        <button
          onClick={() => nextPage()}
          disabled={disableNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}