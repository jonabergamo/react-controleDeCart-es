import "./style.css";
import { useEffect } from "react";
import useState from "react-hook-use-state";
import logoMastercard from "../../files/Mastercard-Logo 2.png";
import logoVisa from "../../files/visa.png";
import logoCielo from "../../files/cielo.png";
import logoAmerican from "../../files/american-express.png";
import logoCaju from "../../files/caju.png";
import logoHipercard from "../../files/hipercard.png";
import { motion } from "framer-motion";
import chip from "../../files/chip.png";

function Cartao(props, { item }) {
  const [state, setState] = useState(props.state);
  var style = {   "--cor": props.cor,
  cursor: props.cursor,
  ...props.style,
}
  var icone;
  switch (props.bandeira) {
    case "visa":
      icone = logoVisa;
      break;
    case "mastercard":
      icone = logoMastercard;
      break;
    case "hipercard":
      icone = logoHipercard;
      break;
    case "cielo":
      icone = logoCielo;
      break;
    case "caju":
      icone = logoCaju;
      break;
    case "american_express":
      icone = logoAmerican;
      break;
    default:
      break;
  }



  return (
    <>
      <motion.div
        id={props.id}
        className="container"
        style={style}
        whileHover={props.whileHover || { scale: 1.05 }}
        exit={{ scale: 0 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <motion.div className="titleCard">
          <h3>{props.nome}</h3>
          <img src={chip} alt="" className="chip"></img>
        </motion.div>

        <motion.div className="icone_container">
          <img src={icone} alt="" />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Cartao;
