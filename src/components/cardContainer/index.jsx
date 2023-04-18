import "./style.css";
import Cartao from "../card";
import RoundPlusButton from "../buttons/roundPlusButton";
import NewCard from "../screens/newCard";
import useState from "react-hook-use-state";
import { AnimatePresence, motion } from "framer-motion";

function CardContainer(props) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  function submitCard(cardName, chosenCard, chosenColor) {
    const updateData = [
      // copy the current users state
      ...data,
      // now you can add a new object to add to the array
      {
        // using the length of the array for a unique id
        cardName: cardName,
        chosenCard: chosenCard,
        chosenColor: chosenColor,
      },
    ];
    console.log(cardName, chosenCard, chosenColor);
    setData(updateData);
    console.log(data);
    setShow(false);
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
          {data.map((item, index) => (
            <div key={index}>
              <Cartao
                cursor="pointer"
                nome={item.cardName}
                bandeira={item.chosenCard}
                cor={item.chosenColor}
              />
            </div>
          ))}
          <AllButton />
        </div>
        <RoundPlusButton
          className="addButton"
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
