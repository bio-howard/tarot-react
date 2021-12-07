import React, { useState } from 'react';
import FlipCard from 'flip-card-react';

const cardBack = 'https://images-na.ssl-images-amazon.com/images/I/71wcY6pWOrL.jpg'

const SingleCard = ({ card }) => {

  const [isFlipped, setFlipped] = useState(false);

  function setFront() {
    return (
      <>
        <div class='single-card' onClick={() => setFlipped(x => !x)}>
          <img src={cardBack} alt="Click to flip"></img>
          <div class='sub'>&nbsp;</div>
        </div >
      </>
    )
  }


  function setBack() {
    return (
      <>
        <div class='single-card' onClick={() => setFlipped(x => !x)}>
          <img src={card.img} alt=""></img>
          <div class='sub'>{card.name}</div>
        </div >
      </>
    )
  }

  return (
    <div class='flip-card'>
      <FlipCard isFlipped={isFlipped} front={setFront()} back={setBack()} />
    </div>
  );
};

export default SingleCard;
