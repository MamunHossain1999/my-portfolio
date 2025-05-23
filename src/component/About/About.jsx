import React from "react";
import { motion } from "framer-motion";
import Resume from "../Resume/Resume";
import mamun from "../../assets/mamun.png";

const About = () => {
  return (
    <section className="w-full mx-auto md:pt-12 py-16 bg-gray-900 text-white" id="about">
      <div className="container mx-auto px-6 sm:px-8 md:px-1">
        {/* Section Title */}
        <div className="text-center mb-8">
          <motion.h4
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h4>
          <motion.h3
            className="text-lg sm:text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {"<-~-"} Some information about me! {"-~->"}
          </motion.h3>
        </div>

        {/* About Content */}
        <div className="container mx-auto px-6 sm:px-8 md:px- grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
          {/* Image Section */}
          <motion.div
            className="flex "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={mamun}
              alt="Md Mamun Hossain"
              className="rounded-xl w-full max-w-[400px] md:max-w-[560px] h-[300px] md:h-[600px] object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="mt-6 mb-5 text-lg text-gray-300 text-justify  md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Hello! I am Md Mamun Hossain, and I am 22 years old. I have
              completed my HSC and am currently passionate about coding. I
              truly enjoy exploring the world of coding while also observing
              and learning from innovative projects. Alongside my coding
              journey, I constantly try to expand my knowledge and take
              inspiration from groundbreaking ideas. I believe in learning and
              growing every single day.
            </motion.p>

            <div className="flex flex-col items-center sm:flex-row md:justify-start">
              <Resume />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
