import "./style.css";
import { BiSad } from "react-icons/bi";


export default function NoCardAlert() {
  return (
    <div className="sadAlert">
          <h3 className="noCard-title">Você não possui nenhum cartão adicionado ainda</h3>
          <BiSad className="noCard-icon" size={60}/>
    </div>
  );
}
