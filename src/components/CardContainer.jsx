import "./cardContainer.css";
import Cartao from "./Card";
import RoundPlusButton from "./buttons/RoundPlusButton";

function CardContainer(props) {
  return (
    <>
    <div className="main-content">
      <div className="caixa">
        <Cartao nome="Leonardo" bandeira="mastercard" cor="purple" />
        <Cartao nome="Jonathan" bandeira="visa" cor="black" />
        <Cartao nome="Jonathan" bandeira="visa" cor="black" />
        <Cartao nome="Jonathan" bandeira="visa" cor="black" />
        <Cartao nome="Jonathan" bandeira="visa" cor="black" />
        <AllButton />
      </div>
      <RoundPlusButton className="addButton"/>
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
