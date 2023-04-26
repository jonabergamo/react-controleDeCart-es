import "./style.css";
import Cartao from "../card";
import RoundPlusButton from "../buttons/roundPlusButton";
import NewCard from "../screens/newCard";
import useState from "react-hook-use-state";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { Alert, AlertTitle } from "@mui/material";
import { useEffect } from "react";
import EditCard from "../screens/editCard";
import NoCardAlert from "../noCardAlert";

function CardContainer(props) {
  const [show, setShow] = useState(false);
  var [data, setData] = useState([]);
  const [deleteScreen, setDeleteScreen] = useState(false);
  const [showEditScreen, setShowEditScreen] = useState(false);
  const [editCardData, setEditCardData] = useState({});
  const [showAllButton, setShowAllButton] = useState(false);
  const [showNoCardAlert, setshowNoCardAlert] = useState(false);
  const [cardStyle, setCardStyle] = useState({ cursor: "pointer" });

  function submitCard(cardName, chosenCard, chosenColor, num) {
    const updateData = [
      // copy the current users state
      ...data,
      // now you can add a new object to add to the array
      {
        // using the length of the array for a unique id
        cardName: cardName,
        chosenCard: chosenCard,
        chosenColor: chosenColor,
        id: randonHex(10),
      },
    ];
    console.log(cardName, chosenCard, chosenColor);
    setData(updateData);
    console.log(data);
    setShow(false);
  }

  function deleteToggle(state) {
        if (setEditStart) {
      setEditStart(false);
    }
    setDeleteScreen(state);
  }

  useEffect(() => {
    if (data.length > 0) {
      setShowAllButton(true);
      setshowNoCardAlert(false);
    } else {
      setShowAllButton(false);
      setshowNoCardAlert(true);
    }
  }, [data.length]);

  useEffect(() => {
    console.log(editCardData);
  }, [editCardData]);

  function randonHex(size) {
    return [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  }

  function deleteCard(item) {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== item.id) {
        newData.push(data[i]);
      }
    }
    setData(newData);
  }

  const [editStart, setEditStart] = useState(false);

  function startEdition() {
    if (deleteToggle) {
      setDeleteScreen(false);
    }
    setEditStart(!editStart);
    console.log("edit: " + !editStart);
  }

  function openEditScreen(item, index) {
    if (editStart) {
      setShowEditScreen(true);
      setEditStart(false);
      setEditCardData({ ...data[index], index: index });
    }
  }

  function editCardFinal(cardName, chosenCard, chosenColor, id, index) {
    let newData = [...data];
    newData[index] = {
      cardName: cardName,
      chosenCard: chosenCard,
      chosenColor: chosenColor,
      id: id,
    };
    setShowEditScreen(false);
    setData(newData);
    setEditStart(false);
  }

  return (
    <>
      <div className="newCard">
        <AnimatePresence>
          {showEditScreen ? (
            <EditCard cardData={editCardData} confirmSubmit={editCardFinal} />
          ) : null}
        </AnimatePresence>
      </div>
      <div className="newCard">
        <AnimatePresence>
          {show ? <NewCard confirmSubmit={submitCard} /> : null}
        </AnimatePresence>
      </div>
      <div className="main-content">
        <div className="caixa">
        <div className="noCardAlert">
        <AnimatePresence>
          {showNoCardAlert ? <NoCardAlert/> : null}
        </AnimatePresence>
      </div>
          <div className="cartoes">
            {data.map((item, index) => (
              <motion.div key={index}>
                <Cartao
                  showDelete={deleteScreen}
                  id={item}
                  style={cardStyle}
                  nome={item.cardName}
                  bandeira={item.chosenCard}
                  cor={item.chosenColor}
                  deleteClick={deleteCard}
                  onClick={() => {
                    console.log("clicou");
                    openEditScreen(item, index);
                  }}
                  animate={editStart ? {rotate:3} : null}
                />
              </motion.div>
            ))}
            <AnimatePresence>
              {showAllButton ? (
                <div className="allContainer">
                  <AllButton />
                </div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="bottomButtons">
          <RoundPlusButton
            className="addButton"
            simbol="+"
            onClick={() => {
              setShow(!show);
            }}
          />
          <RoundPlusButton
            className="addButton"
            src={<BsFillTrash3Fill className="icon" size={30} />}
            onClick={() => {
              deleteToggle(!deleteScreen);
            }}
            toggle={true}
            active={deleteScreen}
          />
          <RoundPlusButton
            className="addButton"
            src={<BsFillPencilFill className="icon" size={30} />}
            onClick={(e) => {
              startEdition(e);
            }}
            toggle={true}
            active={editStart}
          />
        </div>
      </div>
    </>
  );

  function AllButton() {
    return (
      <>
        <motion.div
          className="all"
          whileHover={props.whileHover || { scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h1>TODOS</h1>
        </motion.div>
      </>
    );
  }
}

export default CardContainer;
