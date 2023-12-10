import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=inter&size=40&pause=1000&color=6E88FF&center=true&vCenter=true&random=false&width=476&lines=BIMSQ+Sort+Visualizer"
              alt="Typing SVG"
            />
          </a>
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          BIMSQ is an abbreviation for Bubble Sort, Insertion Sort, Merge Sort,
          Selection Sort, and Quick Sort.
        </p>
        <button
          className="inline-block px-8 py-3 mt-7 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
          onClick={() => {
            navigate("/product", { replace: true });
          }}
        >
          See How it Works
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
