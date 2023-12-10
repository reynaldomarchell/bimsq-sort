import Colors from "../Colors/Colors";

const Bar = ({ length, color, width }) => {
  const barStyle = {
    height: `${length * 0.65}vh`,
    backgroundColor: Colors[color],
    width: `${width * 100}px`,
    borderRadius: `${width / 1}px`,
    transform: `rotate(${180}deg)`,
    marginRight: `${2}px`,
    marginTop: `${8}px`,
    marginBottom: `${20}px`,
  };
  const numberStyle = {
    position: "absolute",
    bottom: "5px",
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: "bold",
  };
  return (
    <>
      <div style={barStyle}>
        {width >= 25 && <div style={numberStyle}>{length}</div>}
      </div>
    </>
  );
};

export default Bar;
