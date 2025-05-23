import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import html from "../../assets/html.webp";
import css from "../../assets/csss.png";
import javascript from "../../assets/javascript.png";
import Bootstrap from "../../assets/Bootstrap.png";
import Tailwind from "../../assets/Tailwind_CSS_Logo.svg.png";
import ReactJS from "../../assets/React-icon.svg.png";
import firebase from "../../assets/firebase.png";
import node from "../../assets/nodejspng.png";
import exprees from "../../assets/express-js.png";
import mongodb from "../../assets/mongodb.png";
import { Tooltip } from "react-tooltip";
import { div } from "framer-motion/client";

const Skills = () => {
  const skills = [
    { img: html, id: "html", label: "HTML5" },
    { img: css, id: "css", label: "CSS3" },
    { img: javascript, id: "javascript", label: "JavaScript" },
    { img: Bootstrap, id: "bootstrap", label: "Bootstrap" },
    { img: Tailwind, id: "tailwind", label: "Tailwind CSS" },
    { img: ReactJS, id: "reactjs", label: "React JS" },
    { img: firebase, id: "firebase", label: "Firebase" },
    { img: node, id: "node", label: "Node JS" },
    { img: exprees, id: "express", label: "Express JS" },
    { img: mongodb, id: "mongodb", label: "MongoDB" },
  ];

  return (
    <div className="w-full mx-auto py-11  px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
      id="skills">
      <div
      className="container mx-auto py-11  px-6 sm:px-12 lg:px-20  text-white"
      id="skills"
    >
      {/* Section Title */}
      <div className="text-center pb-12">
        <h4 className="text-4xl font-bold text-primary mb-4">My Skills</h4>
        <h3 className="text-lg sm:text-xl text-gray-400">
          {"<-~-"} Some technologies that I know! {"-~->"}
        </h3>
      </div>

      {/* Marquee Effect for Skills */}
      <Marquee speed={50} gradient={false} pauseOnHover>
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex flex-col items-center mx-6"
            data-tooltip-id={skill.id}
            data-tooltip-content={skill.label}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Tooltip id={skill.id} place="bottom" className="text-gray1" />
            <motion.img
              src={skill.img}
              alt={skill.label}
              className="h-12 sm:h-16 lg:h-30 transition-transform duration-300 hover:scale-110"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
            <span className="mt-2 text-sm sm:text-base">{skill.label}</span>
          </motion.div>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default Skills;
