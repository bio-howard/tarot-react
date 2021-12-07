import React, { useState } from 'react'
import Cards from './Cards'
import Deck from './Deck';
var _ = require("underscore");

function App() {

  const [show, setShow] = useState(false);
  const [option, setOption] = useState('three_normal');
  const [deck, setDeck] = useState(_.shuffle(Deck).slice(0, 3));

  const dropdownMenu = () => {
    return (
      <select name='option' onChange={handleChange} value={option}>
        <option value="three_normal">three cards</option>
        <option value="seven_arrow">seven cards arrow</option>
        <option value="seven_normal">seven cards normal</option>
        <option value="five_normal">five cards normal</option>
        <option value="four_normal">four cards normal</option>
        <option value="horseshoe">seven cards horseshoe</option>
      </select>
    )
  }

  function handleChange(event) {
    setShow(false)
    setOption(event.target.value)


    // shuffle deck according to the spread
    if (event.target.value === 'three_normal') {
      setDeck(_.shuffle(Deck).slice(0, 3))
    } else if (event.target.value === 'seven_arrow') {
      setDeck(_.shuffle(Deck).slice(0, 7))
    } else if (event.target.value === 'seven_normal') {
      setDeck(_.shuffle(Deck).slice(0, 7))
    } else if (event.target.value === 'five_normal') {
      setDeck(_.shuffle(Deck).slice(0, 5))
    } else if (event.target.value === 'four_normal') {
      setDeck(_.shuffle(Deck).slice(0, 4))
    } else if (event.target.value === 'four_normal') {
      setDeck(_.shuffle(Deck).slice(0, 4))
    } else if (event.target.value === 'horseshoe') {
      setDeck(_.shuffle(Deck).slice(0, 7))
    }
  }
  return (
    <>
      {show ?
        <div class='app-view'>
          <button id="back" onClick={() => setShow(false)}>Back</button>
          <div class='cards'>
            <Cards deck={deck} spread={option} />
          </div>
        </div>
        :
        <>
          <div class='menu'>
            <button onClick={() => setShow(!show)}>Deal the cards</button>
            {dropdownMenu()}
          </div>
        </>
      }
    </>
  );
}

export default App
