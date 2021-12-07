import React from 'react';
import SingleCard from './SingleCard';

function spreadThreeNormal(deck) {
  return (
    <div class="flex-container" id="one-row">
      <SingleCard card={deck[0]} />
      <SingleCard card={deck[1]} />
      <SingleCard card={deck[2]} />
    </div>
  )
}

function spreadSevenArrow(deck) {
  return (
    <div>
      <div class="flex-container" id="four-row">
        <div><SingleCard card={deck[0]} /></div>
      </div>
      <div class="flex-container" id="four-row">

        <div><SingleCard card={deck[1]} /></div>
        <div><SingleCard card={deck[2]} /></div>
        <div><SingleCard card={deck[3]} /></div>
      </div>
      <div class="flex-container" id="four-row">

        <div><SingleCard card={deck[4]} /></div>
        <div><SingleCard card={deck[5]} /></div>
      </div>
      <div class="flex-container" id="four-row">
        <div><SingleCard card={deck[6]} /></div>
      </div>
    </div>
  )
}

function spreadSevenNormal(deck) {
  return (
    <div>
      <div class="flex-container" id="three-row">
        <div><SingleCard card={deck[0]} /></div>
        <div><SingleCard card={deck[1]} /></div>
        <div><SingleCard card={deck[2]} /></div>
      </div>
      <div class="flex-container" id="three-row">
        <div><SingleCard card={deck[3]} /></div>
        <div><SingleCard card={deck[4]} /></div>
        <div><SingleCard card={deck[5]} /></div>
      </div>
      <div class="flex-container" id="three-row">
        <div><SingleCard card={deck[6]} /></div>
      </div>
    </div>
  )
}

function spreadFiveNormal(deck) {
  return (
    <div>
      <div class="flex-container" id="two-row">
        <div><SingleCard card={deck[0]} /></div>
        <div><SingleCard card={deck[1]} /></div>
        <div><SingleCard card={deck[2]} /></div>
      </div>
      <div class="flex-container" id="two-row">
        <div><SingleCard card={deck[3]} /></div>
        <div><SingleCard card={deck[4]} /></div>
      </div>
    </div>
  )
}

function spreadFourNormal(deck) {
  return (
    <>
      <div class="flex-container" id="two-row">
        <SingleCard card={deck[0]} />
        <SingleCard card={deck[1]} />
        <SingleCard card={deck[2]} />
      </div>
      <div class="flex-container" id="two-row">
        <SingleCard card={deck[3]} />
      </div>
    </>
  )
}

function spreadHorseShoe(deck) {
  return (
    <div>
      <div class="flex-container" id="four-row">
        <div><SingleCard card={deck[0]} /></div>
        <div class='left-margin-first-row'><SingleCard card={deck[1]} /></div>
      </div>
      <div class="flex-container" id="four-row">
        <div><SingleCard card={deck[2]} /></div>
        <div class='left-margin-second-row'><SingleCard card={deck[3]} /></div>
      </div>
      <div class="flex-container" id="four-row">
        <div><SingleCard card={deck[4]} /></div>
        <div class='left-margin-third-row'><SingleCard card={deck[5]} /></div>
      </div>
      <div class="flex-container" id="four-row">
        <div><SingleCard card={deck[6]} /></div>
      </div>
    </div>
  )
}

function dealCards({ deck, spread }) {
  if (spread === 'three_normal') {
    return spreadThreeNormal(deck)
  }
  else if (spread === 'seven_arrow') {
    return spreadSevenArrow(deck)
  }
  else if (spread === 'seven_normal') {
    return spreadSevenNormal(deck)
  }
  else if (spread === 'five_normal') {
    return spreadFiveNormal(deck)
  }
  else if (spread === 'four_normal') {
    return spreadFourNormal(deck)
  }
  else if (spread === 'horseshoe') {
    return spreadHorseShoe(deck)
  }
}

const Cards = ({ deck, spread }) => {
  return (
    <>{dealCards({ deck, spread })}</>
  );
};

export default Cards;
