import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div id="hero" className="flex items-center justify-center flex-col pt-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
          BIMSQ Sort Visualizer
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          BIMSQ is an abbreviation for Bubble Sort, Insertion Sort, Merge Sort,
          Selection Sort, and Quick Sort.
        </p>
        <button
          className="inline-block px-8 py-3 mt-7 border border-transparent  rounded-md text-white bg-indigo-700 hover:bg-indigo-600 md:text-md transition-all duration-300 ease-in-out text-xl font-semibold shadow-lg"
          onClick={() => {
            navigate("/product");
          }}
        >
          See how it works 🚀
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
