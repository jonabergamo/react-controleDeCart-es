import "./App.css";
import "react-dom";
import CardContainer from "./components/cardContainer";
import ColorButton from "./components/buttons/colorButton";
import TextButton from "./components/buttons/textButton";
import Cartao from "./components/card";

function App() {
  return (
    <>
      <div className="cardContainer">
        <CardContainer />
      </div>
    </>
  );
}

export default App;
