import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import { AiFillEdit, AiFillThunderbolt } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";

const Services = () => {
  return (
    <section className="container mx-auto pt-12 pb-20 md:px-1 bg-black" id="service">
      <div className="container">
        <div className="pb-20">
          <h4 className="title text-center text-4xl  text-primary">My Services</h4>
          <h3 className="font-semibold md:text-xl text-lg mb-2 text-center text-gray-400">
            {"<-~-"} Which services I provide. {"-~->"}
          </h3>
        </div>

        <div className="contain grid lg:grid-cols-3 md:grid-cols-2 md:gap-20 gap-12">
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div className="content" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <AiFillEdit className="icon" />
              <div className="text">
                <h4 className="text-2xl mt-3 font-semibold">Frontend</h4>
                <p className="text-base">
                  I will provide you a complete website design or redesign your website from scratch.
                </p>
                <a href="https://wa.me/+8801795920956" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="inline-flex text-gray1 text-center justify-center items-center px-6 text-lg py-2 rounded shadow hover:shadow-primary shadow-primary"
                    whileHover={{ scale: 1.05, backgroundColor: "#19e126", color: "#fff" }}
                    transition={{ duration: 0.2 }}
                  >
                    Hire Me
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div className="content" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <TiWorld className="icon" />
              <div className="text">
                <h4 className="text-2xl mt-3 font-semibold">MERN Stack</h4>
                <p className="text-base">
                  I will provide you a complete website with frontend and backend or the way you want.
                </p>
                <a href="https://wa.me/+8801795920956" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="inline-flex text-gray1 text-center justify-center items-center px-6 text-lg py-2 rounded shadow hover:shadow-primary shadow-primary"
                    whileHover={{ scale: 1.05, backgroundColor: "#19e126", color: "#fff" }}
                    transition={{ duration: 0.2 }}
                  >
                    Hire Me
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div className="content" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <AiFillThunderbolt className="icon" />
              <div className="text">
                <h4 className="text-2xl mt-3 font-semibold">Backend</h4>
                <p className="text-base">
                  I will develop your backend from Scratch using MERN (MongoDB, Express.js, ReactJS, Node.JS).
                </p>
                <a href="https://wa.me/+8801795920956" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="inline-flex text-gray1 text-center justify-center items-center px-6 text-lg py-2 rounded shadow hover:shadow-primary shadow-primary"
                    whileHover={{ scale: 1.05, backgroundColor: "#19e126", color: "#fff" }}
                    transition={{ duration: 0.2 }}
                  >
                    Hire Me
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
