import "./bar.css";
import Colors from "../Colors/Colors";

const Bar = (props) => {
  const barStyle = {
    height: `${props.length * 0.65}vh`,
    backgroundColor: Colors[props.color],
    width: `${props.width}px`,
    borderRadius: `${props.width / 1}px`,
    transform: `rotate(${180}deg)`,
  };
  const numberStyle = {
    position: "absolute",
    bottom: "5px",
    left: "50%",
    transform: "translateX(-50%)",
  };
  return (
    <>
      <div className="bar" style={barStyle}>
        {props.width >= 25 && (
          <div className="number" style={numberStyle}>
            {props.length}
          </div>
        )}
      </div>
    </>
  );
};

export default Bar;
