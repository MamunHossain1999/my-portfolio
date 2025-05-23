import { useState, useEffect } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Skils from "../Skils/Skils";
import { motion } from "framer-motion";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Banner />

      <motion.div
        className="section"
        initial={{ opacity: 0 }} // Initially hidden
        animate={{ opacity: scrollY > 100 ? 1 : 0 }} // Fade in when scrolled down
        transition={{ duration: 0.5 }}
      >
        <Services />
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 300 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Skils />
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 600 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Project />
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 700 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 1000 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
