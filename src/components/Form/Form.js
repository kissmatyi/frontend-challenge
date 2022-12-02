import React, {useState, useEffect} from "react";
import destinations from '../../destinations.json';
import Select, { components } from "react-select";

function Form({cards, setCards, editedCard, isEditing, setIsEditing}) {
  const [inputWeight, setInputWeight] = useState("");
  const [inputDest, setInputDest] = useState();
  const [count, incrementCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards])

  useEffect(() =>{
    if(isEditing){
      setInputDest(editedCard.dest);
      setInputWeight(editedCard.weight);
    }
  }, [isEditing])

  const CaretDownIcon = () => {
    return <img src="chevron.svg" alt="" />;
  };

  const isReady = inputDest !== undefined && inputWeight !== "";

  const options = destinations.map(destination => {
    const row = {value: destination.title, label: destination.title};
    return row;
  });

  const handleChanges = () => {
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth()+1 < 10 ? "0"+ current.getMonth()+1 : current.getMonth()+1;
    const day = current.getDate() < 10 ? "0"+ current.getDate() : current.getDate();
    const hour = current.getHours() < 10 ? "0"+ current.getHours() : current.getHours();
    const minute = current.getMinutes() < 10 ? "0"+ current.getMinutes() : current.getMinutes();
    const date = `${year}. ${month}. ${day}. - ${hour}:${minute}`;
    if(!isEditing){
      setInputWeight("");
      setInputDest();

      setCards(cards => [...cards, {key: count, date: date, dest: inputDest, weight: inputWeight}]);
      incrementCount(count+1);
    }
    else{
      const mid = [...cards];
      const orderToEdit = mid.find(
        card => card.key === editedCard.key
      );
      orderToEdit.date = date;
      orderToEdit.dest = inputDest; 
      orderToEdit.weight = inputWeight;
      setCards(mid);
      setIsEditing(false);
      setInputWeight("");
      setInputDest();
    }
  }

  return (
    <div className="form">
      <span className="gramm">gramm</span>
      <label className="labelTextWeight labelText">
        Küldemény súlya
        <input type="text"
          className="weightInput"   
          value={inputWeight}
          onKeyPress={(event) => {
            if (!/[0-9 .]/.test(event.key)) {
              event.preventDefault();
            }
          }} 
          onChange={(e) => {
            setInputWeight(e.target.value);
          }} 
        />
      </label>
      <label className="labelTextDest labelText">
        Csomagpont
        <Select 
          components={{ 
            DropdownIndicator:(props) => {return (
            <components.DropdownIndicator {...props}>
              <CaretDownIcon />
            </components.DropdownIndicator>
            );}, 
            IndicatorSeparator:() => null 
          }}
          classNamePrefix="select"
          className="select"
          placeholder=""
          options={options}
          defaultValue=""
          value={inputDest || ""} 
          onChange={(e) =>{
            setInputDest(e);
          }} 
        />
      </label>
      <input 
        className={`${isReady ? "submitReady" : ""}`}
        disabled={!isReady}
        type="submit" 
        value="Mentés" 
        onClick={handleChanges} 
      />
    </div>
  );
}

export default Form;
