import Form from './components/Form/Form';
import './App.css';
import Megrendelesek from './components/Megrendelesek/Megrendelesek';
import {useState} from 'react';

function App() {
  const [cards, setCards] = useState([]);
  const [editedCard, setEditedCards] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="App">
      <h1 className='titleText urlap'>Megrendelő űrlap</h1>
      <Form 
        cards={cards} 
        setCards={setCards} 
        editedCard={editedCard} 
        isEditing={isEditing} 
        setIsEditing={setIsEditing} 
      />
      <h1 className='titleText megrendeles'>Megrendelések</h1>
      <Megrendelesek 
        cards={cards} 
        setCards={setCards} 
        setEditedCards={setEditedCards} 
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default App;
