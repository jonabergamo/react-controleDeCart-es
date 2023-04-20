import { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";

function RoundPlusButton(props) {
  const [active, setActive] = useState(false);

  var style = (props.active === true)
    ? { "--scale": props.scale, backgroundColor: "props.cor", filter: "grayscale(1)" }
    : { "--scale": props.scale, backgroundColor: props.cor };

  return (
    <>
      <motion.div
        whileHover={props.whileHover || { scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        initial={props.initial || { scale: 1 }}
        animate={props.animate || { scale: 1 }}
        transition={props.transition || { duration: 0.1 }}
        exit={props.exit || { scale: 0, opacity: 0 }}
        className="roundButton"
        onClick={() => {
          setActive(props.toggle === true ? !active : false);
          props.onClick();
        }}
        style={style}
      >
        {props.src}
        <h1>{props.simbol}</h1>
      </motion.div>
    </>
  );
}

export default RoundPlusButton;
