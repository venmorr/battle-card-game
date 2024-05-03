// imports
// import { useState } from 'react'

// components
import Card from './Components/Card/Card'

// data
import cardData from '../data/cardData.js'

// css
import './App.css'

function App() {

  return (
    <>
      <div>
        <ul>
          {cardData.map(cardDatum => {
            return (
              <li key={cardDatum.title}>
                <Card datum={cardDatum} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
