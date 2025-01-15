import { useState } from "react";
import { SET_INFO } from "../../constants/set-info";
import { Card } from "../../objects/card";
import { Set } from "../../objects/sets";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useCardList } from "../mobile-layout/hooks/useCardList";
import SettingBlock from "../SettingBlock/SettingBlock";
import SingleCardDisplay from "../SingleCardDisplay/SingleCardDisplay";
import { useTablePagination } from "./hooks/useTablePagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import DesktopListDisplay from "../DesktopListDisplay/DesktopListDisplay";

type SetCurrentSet = (s: Set) => void;
interface DesktopLayoutProps {
  currentSet: string,
  setCurrentSet: SetCurrentSet
}

export default function DesktopLayout(
  { currentSet, setCurrentSet }: DesktopLayoutProps
) {
  const cardList: Card[] = useCardList(currentSet as Set)
  const [currentCard, setCurrentCard] = useState(0);

  const updateSet = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSet: Set = e.target.value as Set;
    setCurrentSet(newSet);
  }

  return (
    <>
      <Header />
      <div className="two-up-layout">
        <SingleCardDisplay
          cardList={cardList}
          currentCard={cardList[currentCard]}
        >
          <SettingBlock
            options={Object.keys(SET_INFO)}
            defaultValue={Set.Daydream as string}
            blockLabel='Set'
            updateFn={updateSet}
          />
        </SingleCardDisplay>
        <DesktopListDisplay
          cardList={cardList}
          setCurrentCard={setCurrentCard}
        />
      </div>
      <Footer />
    </>
  )
}