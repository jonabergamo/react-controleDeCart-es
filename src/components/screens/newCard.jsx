import "./newCard.css";
import cieloLogo from "../../files/cielo.png";
import visaLogo from "../../files/visa.png";
import mastercardLogo from "../../files/Mastercard-Logo 2.png";
import alelo from "../../files/alelo.png";
import american_express from "../../files/american-express.png";
import caju from "../../files/caju.png";
import hipercard from "../../files/hipercard.png";
import sodexo from "../../files/sodexo.png";
import { useState } from "react";

function NewCard() {
  const [left, setLeft] = useState("28px");
    const [top, setTop] = useState("195px");
    const [width, setWidth] = useState("110px");
    const [heigh, setHeigh] = useState("55px");

  function alterar(e) {
    switch (e.target.className) {
      case "logo visa":
            setLeft("28px");
            setTop("195px");
            setHeigh("55px");
            setWidth("110px");
        break;
      case "logo mastercard":
            setLeft("140px");
            setTop("195px");
            setHeigh("55px");
            setWidth("110px");
        break;
      case "logo cielo":
            setLeft("265px");
            setTop("195px");
            setHeigh("55px");
            setWidth("110px");
        break;
      case "logo american_express":
            setLeft("33px");
            setTop("273px");
            setHeigh("70px");
            setWidth("70px");
            break;
            case "logo caju":
                setLeft("129px");
                setTop("285px");
                setHeigh("55px");
                setWidth("110px");
            break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="newCard-container">
        <section className="newCard-title">
          <h2>Novo Cartão</h2>
        </section>
        <section className="newCard-name">
          <label>Nome do Cartão</label>
          <input type="text" id="newCard-input" />
        </section>

        <section className="newCard-flag">
          <label>Bandeira</label>
          <div className="flags">
            <span className="selector" style={{ left: left, top: top, width:width, height: heigh }}></span>
            <img src={visaLogo} className="logo visa" onClick={alterar} />
            <img
              src={mastercardLogo}
              className="logo mastercard"
              onClick={alterar}
            />
            <img src={cieloLogo} className="logo cielo" onClick={alterar} />
            <img
              src={american_express}
              className="logo american_express"
              onClick={alterar}
            />
            <img src={caju} className="logo caju" onClick={alterar} />
            <img src={hipercard} className="logo hipercard" onClick={alterar} />
          </div>
        </section>
      </div>
    </>
  );
}

export default NewCard;
