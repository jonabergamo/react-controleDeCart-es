import "./style.css"
import { motion } from "framer-motion";

function TextButton(props) {
  const style = {"--Primary-Color": props.cor}


  return (
    <>
      <motion.div
        className="textButton"
        transition={{ type: "spring", duration: 0.3, stiffness: 100}}
        whileTap={{ scale: 1.1 }}
        onTap={props.onClick}
        whileHover={{ scale: 1.1 }}
        style={style}
      >
        <h3>{props.text}</h3>
      </motion.div>
    </>
  );
}

export default TextButton;
