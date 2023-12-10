function RangeSlider({ onChange, value }) {
  return (
    <div className="flex flex-col items-center content-center w-20 md:w-40">
      <div className="title">
        <h4 className="m-0 mb-2">Set Array Size ({value})</h4>
      </div>

      <div className="flex items-center bg-white rounded p-2 mb-5">
        <input
          type="range"
          min={5}
          max={100}
          step={5}
          onChange={onChange}
          title={value}
          value={value}
          className="bg-white rounded h-1 outline-none border-none w-20 md:w-40"
        />
      </div>
    </div>
  );
}

export default RangeSlider;
