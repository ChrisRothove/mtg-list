import { useState } from 'react'
import './App.css'
import { Set } from './objects/sets'
import MobileLayout from './components/mobile-layout/MobileLayout'
import { useMediaQuery } from 'usehooks-ts';
import DesktopLayout from './components/DesktopLayout/DesktopLayout';


function App() {
  const [currentSet, setCurrentSet] = useState(Set.Daydream as string);
  const isMobile = useMediaQuery('(max-width: 450px)');

  return (
    <>
      {isMobile ? (
        <MobileLayout
          currentSet={currentSet}
          setCurrentSet={setCurrentSet}
        />
      ) : (
          <DesktopLayout
            currentSet={currentSet}
            setCurrentSet={setCurrentSet}
          />
      )}
    </>
  )
}

export default App
