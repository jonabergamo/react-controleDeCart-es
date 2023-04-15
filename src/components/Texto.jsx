import { useState } from "react";
import "./texto.css";
import Cartao from "./Cartao";

function Texto(props) {
  return (
    <>
      <div className="caixa">
        <Cartao cor="#00008B" nome="Safra" bandeira="visa" />
        <Cartao nome="NuBank" bandeira="mastercard" cor="purple" />
        <Cartao nome="Bradesco" bandeira="visa" cor="red" />
        <Cartao nome="Inter" bandeira="mastercard" cor="#ff7a00" />
        </div>
    </>
  );
}

export default Texto;
