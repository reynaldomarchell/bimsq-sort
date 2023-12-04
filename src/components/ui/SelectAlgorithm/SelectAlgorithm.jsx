import "./selectalgorithm.css";

function SelectAlgorithm({ onChange }) {
  // const [algorithm, setAlgorithm] = React.useState("")

  // const handleChange = event => {
  //     let v = event.target.value
  //     setAlgorithm(v)
  // }

  return (
    <div>
      <h4>Select Algorithm</h4>
      <select
        name="algorithms"
        id="algorithms"
        className="select-algorithms"
        onChange={onChange}
      >
        <option value="">--Click here--</option>
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
        <option value="Merge Sort">Merge Sort</option>
        <option value="Selection Sort">Selection Sort</option>
        <option value="Quick Sort">Quick Sort</option>
      </select>
    </div>
  );
}

export default SelectAlgorithm;
