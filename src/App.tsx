import { useState } from 'react'
import './App.css'
import { Card } from './objects/card'
import { Set } from './objects/sets'
import { useCardList } from './components/mobile-layout/hooks/useCardList'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Paragraphy from './components/Paragraphy/Paragraphy'
import ManaSymbols from './components/ManaSymbol/ManaSymbol'


function App() {
  const [currentSet, setCurrentSet] = useState(Set.Daydream);
  const cardList: Card[] = useCardList(currentSet)
  const card = cardList[16];

  return (
    <>
      <Header />
      <div className="card">
        <div className='card-header'>
          <h3 className='card-name'>{card.name}</h3>
        </div>
        <ManaSymbols cost={card.cost} />
        <div className='type-line'>
          &mdash; {card.superType}
          {card.subType ?? ` &mdash ${card.subType}`} &mdash;
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
      <Footer />
    </>
  )
}

export default App
