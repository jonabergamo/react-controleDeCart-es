import "./style.css";
import cieloLogo from "../../../files/cielo.png";
import visaLogo from "../../../files/visa.png";
import mastercardLogo from "../../../files/Mastercard-Logo 2.png";
import american_express from "../../../files/american-express.png";
import caju from "../../../files/caju.png";
import hipercard from "../../../files/hipercard.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorButton from "../../buttons/colorButton";
import Cartao from "../../card";
import TextButton from "../../buttons/textButton";

function EditCard(props) {
  const [x, setX] = useState("-115px");
  const [y, setY] = useState("-5px");
  const [height, setHeight] = useState("55px");
  const [width, setWidth] = useState("110px");
  const [chosenCard, setChosenCard] = useState(props.cardData.chosenCard);
  const [chosenColor, setChosenColor] = useState(props.cardData.chosenColor);
  const [selectorX, setSelectorX] = useState("-5px");
  const [selectorY, setSelectorY] = useState("15px");
  const [cardName, setCardName] = useState(props.cardData.cardName);
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    switch (props.cardData.chosenColor) {
      case "#8F02D1":
        setSelectorX("-5px");
        setSelectorY("15px");
        setChosenColor("#8F02D1");
        break;
      case "#FF9900":
        setSelectorX("65px");
        setSelectorY("15px");
        setChosenColor("#FF9900");
        break;
      case "#3F3F3F":
        setSelectorX("135px");
        setSelectorY("15px");
        setChosenColor("#3F3F3F");
        break;
      case "#D1020E":
        setSelectorX("205px");
        setSelectorY("15px");
        setChosenColor("#D1020E");
        break;
      case "#00D6C9":
        setSelectorX("275px");
        setSelectorY("15px");
        setChosenColor("#00D6C9");
        break;
      case "#2EEC1E":
        setSelectorX("345px");
        setSelectorY("15px");
        setChosenColor("#2EEC1E");
        break;
      case "#FE1CBF":
        setSelectorX("-5px");
        setSelectorY("85px");
        setChosenColor("#FE1CBF");
        break;
      case "#FFE711":
        setSelectorX("65px");
        setSelectorY("85px");
        setChosenColor("#FFE711");
        break;
      case "#999999":
        setSelectorX("135px");
        setSelectorY("85px");
        setChosenColor("#999999");
        break;
      case "#0085BE":
        setSelectorX("205px");
        setSelectorY("85px");
        setChosenColor("#0085BE");
        break;
      case "#8D4730":
        setSelectorX("275px");
        setSelectorY("85px");
        setChosenColor("#8D4730");
        break;
      case "#E7BB7A":
        setSelectorX("345px");
        setSelectorY("85px");
        setChosenColor("#E7BB7A");
        break;
      default:
        break;
    }
    switch (props.cardData.chosenCard) {
      case "visa":
        setX("-115px");
        setY("-5px");
        setWidth("110px");
        setHeight("55px");
        setChosenCard("visa");
        break;
      case "mastercard":
        setX("-0px");
        setY("-5px");
        setWidth("110px");
        setHeight("55px");
        setChosenCard("mastercard");
        break;
      case "cielo":
        setX("120px");
        setY("-5px");
        setWidth("110px");
        setHeight("55px");
        setChosenCard("cielo");
        break;
      case "american_express":
        setX("-130px");
        setY("83px");
        setHeight("70px");
        setWidth("70px");
        setChosenCard("american_express");
        break;
      case "caju":
        setX("-15px");
        setY("83px");
        setWidth("140px");
        setHeight("55px");
        setChosenCard("caju");
        break;
      case "hipercard":
        setX("123px");
        setY("83px");
        setWidth("90px");
        setHeight("55px");
        setChosenCard("hipercard");
        break;
      default:
        break;
    }
    setCardName(props.cardData.cardName)
  },[props.cardData]);

  function selectColor(e) {
    switch (e.target.id) {
      case "#8F02D1":
        setSelectorX("-5px");
        setSelectorY("15px");
        setChosenColor("#8F02D1");
        break;
      case "#FF9900":
        setSelectorX("65px");
        setSelectorY("15px");
        setChosenColor("#FF9900");
        break;
      case "#3F3F3F":
        setSelectorX("135px");
        setSelectorY("15px");
        setChosenColor("#3F3F3F");
        break;
      case "#D1020E":
        setSelectorX("205px");
        setSelectorY("15px");
        setChosenColor("#D1020E");
        break;
      case "#00D6C9":
        setSelectorX("275px");
        setSelectorY("15px");
        setChosenColor("#00D6C9");
        break;
      case "#2EEC1E":
        setSelectorX("345px");
        setSelectorY("15px");
        setChosenColor("#2EEC1E");
        break;
      case "#FE1CBF":
        setSelectorX("-5px");
        setSelectorY("85px");
        setChosenColor("#FE1CBF");
        break;
      case "#FFE711":
        setSelectorX("65px");
        setSelectorY("85px");
        setChosenColor("#FFE711");
        break;
      case "#999999":
        setSelectorX("135px");
        setSelectorY("85px");
        setChosenColor("#999999");
        break;
      case "#0085BE":
        setSelectorX("205px");
        setSelectorY("85px");
        setChosenColor("#0085BE");
        break;
      case "#8D4730":
        setSelectorX("275px");
        setSelectorY("85px");
        setChosenColor("#8D4730");
        break;
      case "#E7BB7A":
        setSelectorX("345px");
        setSelectorY("85px");
        setChosenColor("#E7BB7A");
        break;
      default:
        break;
    }
    return chosenColor;
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
  

  function setName(e) {
    setCardName(e.target.value);
  }

  const OLD_CARD_NAME = props.cardData.cardName;

  return (
    <>
      <motion.div
        exit={{ opacity: 0, scale: 0 }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="newCard-container"
      >
        <section className="newCard-title">
          <h2>Editar cartão {OLD_CARD_NAME}</h2>
        </section>
        <section className="optionsContainer">
          <section className="options">
            <section className="newCard-name">
              <label>Novo nome do Cartão</label>
              <input
                type="text"
                id="newCard-input"
                placeholder="digite aqui..."
                onChange={setName}
                maxLength={20}
                value={props.cardName || cardName}
              />
            </section>
            <section className="newCard-flag">
              <label>Bandeira</label>
              <motion.div
                className="flags"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
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
                <img
                  src={caju}
                  className="logo caju"
                  onClick={alterar}
                  alt=""
                />
                <img
                  src={hipercard}
                  className="logo hipercard"
                  onClick={alterar}
                  alt=""
                />
              </motion.div>
            </section>
            <section className="newCard-color"></section>
            <label>Cor do cartão</label>
            <motion.div
              className="newCard-actualSelect"
              animate={{ x: selectorX, y: selectorY }}
              transition={{ type: "spring", stiffness: 45 }}
            />
            <motion.div
              className="newCard-colorsContent"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <ColorButton
                id={selectColor}
                cor="#8F02D1"
                className="colorBtn 1"
              />
              <ColorButton
                cor="#FF9900"
                className="colorBtn 2"
                id={selectColor}
              />
              <ColorButton
                cor="#3F3F3F"
                className="colorBtn 3"
                id={selectColor}
              />
              <ColorButton
                cor="#D1020E"
                className="colorBtn 4"
                id={selectColor}
              />
              <ColorButton
                cor="#00D6C9"
                className="colorBtn 5"
                id={selectColor}
              />
              <ColorButton
                cor="#2EEC1E"
                className="colorBtn 6"
                id={selectColor}
              />
              <ColorButton
                cor="#FE1CBF"
                className="colorBtn 7"
                id={selectColor}
              />
              <ColorButton
                cor="#FFE711"
                className="colorBtn 8"
                id={selectColor}
              />
              <ColorButton
                cor="#999999"
                className="colorBtn 9"
                id={selectColor}
              />
              <ColorButton
                cor="#0085BE"
                className="colorBtn 10"
                id={selectColor}
              />
              <ColorButton
                cor="#8D4730"
                className="colorBtn 11"
                id={selectColor}
              />
              <ColorButton
                cor="#E7BB7A"
                className="colorBtn 12"
                id={selectColor}
              />
            </motion.div>
          </section>
          <section className="cardVisualizer">
            <Cartao
              nome={cardName}
              bandeira={chosenCard}
              cor={chosenColor}
              whileHover={{ scale: 1 }}
            ></Cartao>
          </section>
        </section>
        <div className="btnArea">
          <TextButton
            text="CONFIRMAR"
            className="submitBtn"
            onClick={() => {
              props.confirmSubmit(cardName, chosenCard, chosenColor, props.cardData.id ,props.cardData.index);
            }}
          />
        </div>
      </motion.div>
    </>
  );
}

export default EditCard;
