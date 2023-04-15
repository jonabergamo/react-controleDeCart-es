import { useState } from "react";
import "./cardContainer.css";
import Cartao from "./Cartao";

function CardContainer(props) {
  return (
    <>
      <div className="caixa">
        <Cartao nome="Leonardo" bandeira="mastercard" cor="purple" />
        <Cartao nome="Jonathan" bandeira="visa" cor="black" />
        <Cartao nome="Jonathan" bandeira="visa" cor="black" />
        <Cartao nome="Jonathan" bandeira="visa" cor="black" />
        <Cartao nome="Jonathan" bandeira="visa" cor="black"/>
        <AllButton/>
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
    )
  }
}

export default CardContainer;
