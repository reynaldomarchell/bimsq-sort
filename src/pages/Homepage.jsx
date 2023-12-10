import { useState, useEffect } from "react";
import About from "../components/ui/Home/About";
import Footer from "../components/ui/Home/Footer";
import HeroSection from "../components/ui/Home/HeroSection";
import Explanations from "../components/ui/Home/Explanations";
import Peoples from "../components/ui/Home/Peoples";

function Homepage() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-700 text-lg p-1 rounded-md hover:bg-indigo-600"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <HeroSection />
          <Explanations />
          <Peoples />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
