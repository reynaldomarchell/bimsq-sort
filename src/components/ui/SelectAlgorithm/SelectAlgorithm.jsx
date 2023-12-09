import "./selectalgorithm.css";

function SelectAlgorithm({ algorithm, setAlgorithm }) {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    console.log(algorithm);
    if (checked) {
      if (algorithm.length < 2) {
        setAlgorithm((prevSelectedAlgorithms) => [
          ...prevSelectedAlgorithms,
          value,
        ]);
      } else {
        event.target.checked = false;
      }
    } else {
      setAlgorithm((prevSelectedAlgorithms) =>
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
