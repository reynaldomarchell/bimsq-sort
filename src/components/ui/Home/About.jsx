import myImg from "../../../../public/images/hero.jpg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <SectionTitle>About This Project</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          We created the BIMSQ Sort Visualizer to fulfill the final assignment
          for the Algorithm Design and Analysis course. This project was created
          with the aim of displaying a visualization of the five sorting
          algorithms that we often use, namely Bubble Sort, Insertion Sort,
          Merge Sort, Selection Sort, and Quick Sort.
        </p>
      </div>

      <img
        src={myImg}
        alt="About This Project"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
