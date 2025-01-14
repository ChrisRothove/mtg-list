import { useState } from 'react'
import './App.css'
import { Set } from './objects/sets'
import MobileLayout from './components/mobile-layout/MobileLayout'


function App() {
  const [currentSet, setCurrentSet] = useState(Set.Daydream as string);

  return (
    <>
      <MobileLayout
        currentSet={currentSet}
        setCurrentSet={setCurrentSet}
      />
    </>
  )
}

export default App
