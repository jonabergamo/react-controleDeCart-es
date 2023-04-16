import "./colorButton.css";
import { motion } from "framer-motion";

function ColorButton(props, onClick) {
    const style = { "--corButton": props.cor };
    

  return (
    <>
          <motion.div
              onClick={props.onClick}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              id={props.cor}
              className="color" style={style}
          ></motion.div>
    </>
  );
}

export default ColorButton;
