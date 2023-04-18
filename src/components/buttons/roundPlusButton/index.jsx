import "./style.css";

function RoundPlusButton(props) {
  return (
    <>
      <div className="roundButton" onClick={props.onClick}>
        <h1>+</h1>
      </div>
    </>
  );
}

export default RoundPlusButton;
