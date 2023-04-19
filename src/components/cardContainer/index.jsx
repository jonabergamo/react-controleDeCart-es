import "./style.css";
import Cartao from "../card";
import RoundPlusButton from "../buttons/roundPlusButton";
import NewCard from "../screens/newCard";
import useState from "react-hook-use-state";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import ClickAwayListener from "@mui/base/ClickAwayListener";

function CardContainer(props) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

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
        id: data.length,
      },
    ];
    console.log(cardName, chosenCard, chosenColor);
    setData(updateData);
    console.log(data);
    setShow(false);
  }

  function toggleShow() {
    setShow(!show);
  }

  const [deleteY, setDeleteX] = useState();

  function dragging(event, info) {
    if (info.offset.x > 300) {
    }
    console.log(info.offset.x);
  }

  return (
    <>
      <div className="newCard">
        <AnimatePresence>
            {show ? <NewCard confirmSubmit={submitCard} /> : null}
          </AnimatePresence>

      </div>
      <div className="main-content">
        <div className="caixa">
          <div className="cartoes">
            {data.map((item, index) => (
              <motion.div key={index}>
                <Cartao
                  id={item.id}
                  style={{ cursor: "pointer" }}
                  nome={item.cardName}
                  bandeira={item.chosenCard}
                  cor={item.chosenColor}
                />
              </motion.div>
            ))}
            <AllButton />
          </div>
        </div>
        <RoundPlusButton
          className="addButton"
          simbol="+"
          onClick={() => {
            setShow(!show);
          }}
        />
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
          initial={{ scale: 1 }}
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
