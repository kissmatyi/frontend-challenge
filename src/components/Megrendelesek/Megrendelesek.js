import React from "react";
import Kartya from "../Kartya/Kartya";

function Megrendelesek({cards, setCards, setEditedCards, setIsEditing}){
  return (
    <div>
      {cards.map(e => {
        return <Kartya 
          cardKey={e.key} 
          date={e.date} 
          dest={e.dest.value} 
          weight={e.weight} 
          cards={cards} 
          setCards={setCards} 
          setEditedCards={setEditedCards} 
          setIsEditing={setIsEditing}
        />
      })}
    </div>
  );
}

export default Megrendelesek;
