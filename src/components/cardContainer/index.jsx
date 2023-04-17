import "./style.css";
import Cartao from "../card";
import RoundPlusButton from "../buttons/roundPlusButton";

function CardContainer(props) {
  return (
    <>
      <div className="main-content">
        <div className="caixa">
          <AllButton />
        </div>
        <RoundPlusButton className="addButton" />
      </div>
    </>
  );

  function AllButton() {
    return (
      <>
        <div className="all">
          <h1>TODOS</h1>
        </div>
      </>
    );
  }
}

export default CardContainer;
