import { useState } from "react";
import { Display } from "../../objects/displayOptions";
import { Set } from "../../objects/sets";
import Header from "../Header/Header";
import SingleCardDisplay from "../SingleCardDisplay/SingleCardDisplay";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import SettingBlock from "../SettingBlock/SettingBlock";
import { useCardList } from "./hooks/useCardList";
import { Card } from "../../objects/card";
import { SET_INFO } from "../../constants/set-info";
import Paragraphy from "../Paragraphy/Paragraphy";
import { MECHANICS } from "../../constants/mechanic-info";
import MobileListDisplay from "../MobileListDisplay/MobileListDisplay";

type SetCurrentSet = (s: Set) => void;
interface MobileLayoutProps {
  currentSet: string,
  setCurrentSet: SetCurrentSet
}
function MobileLayout({currentSet, setCurrentSet}: MobileLayoutProps) {
  const cardList: Card[] = useCardList(currentSet as Set)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [displayStyle, setDisplayStyle] = useState(Display.Single);

  const updateSet = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSet: Set = e.target.value as Set;
    setCurrentSet(newSet);
  }

  const updateDisplay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDisplayStyle = e.target.value as Display;
    setDisplayStyle(newDisplayStyle);
  }
  return (
    <>
      <Header openDrawer={setDrawerIsOpen} />
      {displayStyle === Display.Single
        ? (
          <SingleCardDisplay cardList={cardList}>
            <SettingBlock
              options={Object.values(Display)}
              defaultValue={Display.Single as string}
              blockLabel='Display'
              updateFn={updateDisplay}
            />
          </SingleCardDisplay>
        )
        : (
          <MobileListDisplay
            cardList={cardList}
            updateFn={updateDisplay}
          />
        )}
      
      <Footer />

      {drawerIsOpen && <div className="fade"></div>}
      <Drawer open={drawerIsOpen} closeDrawer={setDrawerIsOpen}>
        <>
          <SettingBlock
            options={Object.keys(SET_INFO)}
            blockLabel='Select Set'
            updateFn={updateSet}
          />
          <h3>{currentSet}</h3>
          <Paragraphy text={SET_INFO[currentSet]} />
          <h3>Mechanics</h3>
          {MECHANICS[currentSet].map(mech => {
            return (
              <>
                <h4>{mech.title}</h4>
                <p><i>{ mech.body}</i></p>
              </>
            )
          })}
        </>
      </Drawer>
    </>
  )
}

export default MobileLayout
