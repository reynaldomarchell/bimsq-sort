import "./navbar.css";
import RangeSlider from "../RangeSlider/RangeSlider";
import SelectAlgorithm from "../SelectAlgorithm/SelectAlgorithm";

function VerticalBar() {
  return <div className="verticalBar"></div>;
}

function Navbar(props) {
  // generates a new random array
  const generateNewArrayHandler = () => {
    props.generateNewArray();
  };

  // lets the user change size of array and speed of sorting
  const handleArraySizeAndSpeedChange = (event) => {
    props.handleArraySizeAndSpeedChange(event.target.value);
  };

  // starts playing the sorting algorithm
  const sortArrayHandler = () => {
    props.startSorting();
  };

  return (
    <div className="navbar">
      <div className="navbar__title">
        <h1>BIMSQ Sorting Visualizer</h1>
      </div>

      <div className="navbar__toolbar">
        <div className="navbar__toolbar-slider">
          <RangeSlider
            onChange={handleArraySizeAndSpeedChange}
            value={props.arraySize}
          />
        </div>

        <div>
          <VerticalBar />
        </div>

        <div className="navbar__toolbar-newarray">
          <button className="Algobutton" onClick={generateNewArrayHandler}>
            Generate Array
          </button>
        </div>

        <div>
          <VerticalBar />
        </div>

        <div className="navbar__toolbar-algorithms">
          <SelectAlgorithm
            algorithm={props.algorithm}
            setAlgorithm={props.setAlgorithm}
          />
        </div>

        <div>
          <VerticalBar />
        </div>

        <div className="navbar__toolbar-sort">
          <button className="Algobutton" onClick={sortArrayHandler}>
            Sort!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
