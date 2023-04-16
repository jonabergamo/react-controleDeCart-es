import "./newCard.css";
import cieloLogo from "../../files/cielo.png";
import visaLogo from "../../files/visa.png";
import mastercardLogo from "../../files/Mastercard-Logo 2.png";
import american_express from "../../files/american-express.png";
import caju from "../../files/caju.png";
import hipercard from "../../files/hipercard.png";
import { useState } from "react";
import { motion } from "framer-motion";
import ColorButton from "../buttons/colorButton";

function NewCard() {
  const [x, setX] = useState("-115px");
  const [y, setY] = useState("-5px");
  const [height, setHeight] = useState("55px");
  const [width, setWidth] = useState("110px");
  const [chosenCard, setChosenCard] = useState("visa");
  const [selectorX, setSelectorX] = useState("-5px");
  const [selectorY, setSelectorY] = useState("15px");

  function selectColor(e) {
    console.log(e.target.id);
    switch (e.target.id) {
      case "8F02D1":
        break;
      case "FF9900":
        break;
      case "3F3F3F":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      case "8F02D1":
        break;
      default:
        break;
    }
  }

  function alterar(e) {
    switch (e.target.className) {
      case "logo visa":
        setX("-115px");
        setY("-5px");
        setWidth("110px");
        setHeight("55px");
        setChosenCard("visa");
        break;
      case "logo mastercard":
        setX("-0px");
        setY("-5px");
        setWidth("110px");
        setHeight("55px");
        setChosenCard("mastercard");
        break;
      case "logo cielo":
        setX("120px");
        setY("-5px");
        setWidth("110px");
        setHeight("55px");
        setChosenCard("cielo");
        break;
      case "logo american_express":
        setX("-130px");
        setY("83px");
        setHeight("70px");
        setWidth("70px");
        setChosenCard("american_express");
        break;
      case "logo caju":
        setX("-15px");
        setY("83px");
        setWidth("140px");
        setHeight("55px");
        setChosenCard("caju");
        break;
      case "logo hipercard":
        setX("123px");
        setY("83px");
        setWidth("90px");
        setHeight("55px");
        setChosenCard("hipercard");
        break;
      default:
        break;
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -200, x: -300 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="newCard-container"
      >
        <section className="newCard-title">
          <h2>Novo Cartão</h2>
        </section>
        <section className="newCard-name">
          <label>Nome do Cartão</label>
          <input type="text" id="newCard-input" placeholder="digite aqui..." />
        </section>

        <section className="newCard-flag">
          <label>Bandeira</label>
          <div className="flags">
            <motion.div
              animate={{ x, y, opacity: 1, scale: 1, height, width }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="selector"
            />
            <img
              src={visaLogo}
              className="logo visa"
              onClick={alterar}
              alt=""
            />
            <img
              src={mastercardLogo}
              className="logo mastercard"
              onClick={alterar}
              alt=""
            />
            <img
              src={cieloLogo}
              className="logo cielo"
              onClick={alterar}
              alt=""
            />
            <img
              src={american_express}
              className="logo american_express"
              onClick={alterar}
              alt=""
            />
            <img src={caju} className="logo caju" onClick={alterar} alt="" />
            <img
              src={hipercard}
              className="logo hipercard"
              onClick={alterar}
              alt=""
            />
          </div>
        </section>
        <section className="newCard-color">
          <label>Cor do cartão</label>
          <motion.div
            className="newCard-actualSelect"
            animate={{ x: selectorX, y: selectorY }}
          />
          <motion.div
            className="newCard-colorsContent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <ColorButton
              onClick={selectColor}
              cor="#8F02D1"
              className="colorBtn 1"
            />
            <ColorButton
              cor="#FF9900"
              className="colorBtn 2"
              onClick={selectColor}
            />
            <ColorButton
              cor="#3F3F3F"
              className="colorBtn 3"
              onClick={selectColor}
            />
            <ColorButton
              cor="#D1020E"
              className="colorBtn 4"
              onClick={selectColor}
            />
            <ColorButton
              cor="#00D6C9"
              className="colorBtn 5"
              onClick={selectColor}
            />
            <ColorButton
              cor="#2EEC1E"
              className="colorBtn 6"
              onClick={selectColor}
            />
            <ColorButton
              cor="#FE1CBF"
              className="colorBtn 7"
              onClick={selectColor}
            />
            <ColorButton
              cor="#FFE711"
              className="colorBtn 8"
              onClick={selectColor}
            />
            <ColorButton
              cor="#999999"
              className="colorBtn 9"
              onClick={selectColor}
            />
            <ColorButton
              cor="#0085BE"
              className="colorBtn 10"
              onClick={selectColor}
            />
            <ColorButton
              cor="#8D4730"
              className="colorBtn 11"
              onClick={selectColor}
            />
            <ColorButton
              cor="#E7BB7A"
              className="colorBtn 12"
              onClick={selectColor}
            />
          </motion.div>
        </section>
      </motion.div>
    </>
  );
}

export default NewCard;
