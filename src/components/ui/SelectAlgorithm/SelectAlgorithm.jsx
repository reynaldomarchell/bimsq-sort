import React from "react";
import "./selectalgorithm.css";

function SelectAlgorithm({onChange}){
  const [selectedAlgorithms, setSelectedAlgorithms] = React.useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (selectedAlgorithms.length < 2) {
        setSelectedAlgorithms((prevSelectedAlgorithms) => [
          ...prevSelectedAlgorithms,
          value,
        ]);
      } else {
        event.target.checked = false;
      }
    } else {
      setSelectedAlgorithms((prevSelectedAlgorithms) =>
        prevSelectedAlgorithms.filter((algorithm) => algorithm !== value)
      );
    }
  };

  return (
    <div className="outer__container">
      <div className="checkbox__container">
        <h4>Select Algorithm</h4>
        <label>
          <input
            type="checkbox"
            name="algorithms"
            value="Bubble Sort"
            onChange={handleChange}
          />
          Bubble Sort
        </label>

        <label>
          <input
            type="checkbox"
            name="algorithms"
            value="Insertion Sort"
            onChange={handleChange}
          />
          Insertion Sort
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="algorithms"
            value="Merge Sort"
            onChange={handleChange}
          />
          Merge Sort
        </label>

        <label>
          <input
            type="checkbox"
            name="algorithms"
            value="Selection Sort"
            onChange={handleChange}
          />
          Selection Sort
        </label>

        <label>
          <input
            type="checkbox"
            name="algorithms"
            value="Quick Sort"
            onChange={handleChange}
          />
          Quick Sort
        </label>
      </div>
    </div>
  );
}

export default SelectAlgorithm;
