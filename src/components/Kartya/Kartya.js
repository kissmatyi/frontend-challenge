import React from "react";

function Kartya({cards, setCards, date, dest, weight, cardKey, setEditedCards, setIsEditing}) {

  const deleteCard = () => {
    let mid = cards;
    mid = mid.filter(card => card.key !== cardKey);
    setCards(mid);
  }

  const editCard = () => {
    cards.map(card => {
      if(card.key === cardKey){
        setEditedCards(card);
      }
      return card;
    })
    setIsEditing(true);
  }

  return (
    <div className="kartya">
      <div className="date">
        <p className="header">Dátum</p>
        <p className="body">{date}</p>
      </div>
      <div className="dest">
        <p className="header">Csomagpont neve</p>
        <p className="body">{dest}</p>
      </div>
      <div className="weight">
        <p className="header">Küldemény súlya</p>
        <p className="body">{weight}</p>
      </div>
        <img className="kuka" alt="" onClick={deleteCard} src="kuka.svg"></img>
        <img className="toll" alt="" onClick={editCard} src="toll.svg"></img>
    </div>
  );
}

export default Kartya;
