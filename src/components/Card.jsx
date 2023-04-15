import "./card.css"
import { useEffect } from "react";
import useState from "react-hook-use-state";
import logoMastercard from "../files/Mastercard-Logo 2.png"
import logoVisa from "../files/visa.png"

function Cartao(props) {
    const [state, setState] = useState(props.state);
    const style = { "--cor": props.cor };
    var icone;
    if (props.bandeira === "visa") {
        icone = logoVisa;
    } else if(props.bandeira === "mastercard"){
        icone = logoMastercard;
    }
    return (
        <>
            <div className="container" style={style}>
                <h3>{props.nome}</h3>
                <img src={icone} />
            </div>
        </>
    )
}

export default Cartao;