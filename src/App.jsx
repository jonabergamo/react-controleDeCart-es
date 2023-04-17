import "./App.css";
import "react-dom";
import CardContainer from "./components/cardContainer";
import NewCard from "./components/screens/newCard";

function App() {
  function handleNewCard(newCard) {
    console.log(newCard);
  }
  return (
    <>
      <div className="cardScreen">
        <NewCard onAddCard={handleNewCard} />
      </div>
      <div className="cardContainer">
        <CardContainer />
      </div>
    </>
  );
}

export default App;
