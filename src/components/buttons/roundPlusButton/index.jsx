import "./style.css";
import { motion } from "framer-motion";

function RoundPlusButton(props) {
  return (
    <>
      <motion.div
        whileHover={props.whileHover || { scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1}}
        className="roundButton"
        onClick={props.onClick}
      >
        <h1>{props.simbol}</h1>
      </motion.div>
    </>
  );
}

export default RoundPlusButton;
