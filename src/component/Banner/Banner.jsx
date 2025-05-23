import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Resume from "../Resume/Resume";
import profilePic from "../../assets/mamun.png";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-gray-200 bg-gray-900" id="home">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6 py-10 lg:py-20">
        {/* Left Section - Text Content */}
        <motion.div
          className="flex flex-col justify-center md:pl-24 text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Title Animation */}
          <motion.h2
            className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary py-1">Hello</span>! I am <br />
            Mamun <span className="text-primary py-1">Hossain</span>
          </motion.h2>

          {/* Typewriter Animation */}
          <motion.p
            className="my-4 text-lg sm:text-xl lg:text-2xl flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            I'm a{" "}
            <span className="text-[#19e126] font-semibold ml-2">
              <Typewriter
                options={{
                  strings: ["_ MERN Stack Developer", "_ Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </motion.p>
          <span>
            As a junior web developer, I specialize in building responsive and
            user-friendly websites.
          </span>

          {/* Social Icons */}
          <motion.div
            className="mt-6 flex justify-center lg:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="text-white bg-green-600 p-3 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out"
                size={40}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="text-white bg-green-600 p-3 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out"
                size={40}
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-white bg-green-600 p-3 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out"
                size={40}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-white bg-green-600 p-3 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out"
                size={40}
              />
            </a>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          >
            <Resume />
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
          className="flex items-center justify-center lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut", type: "spring" }}
        >
          {/* Rotating Gradient Border Container */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
            {/* Outer Circle with Rotating Gradient Border */}
            <motion.div
              className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-purple-500"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />

            {/* Inner White Circle to Create Gap */}
            <div className="absolute w-[95%] h-[95%] rounded-full bg-gray-900 shadow-2xl" />

            {/* Profile Image (Fixed, No Rotation) */}
            <motion.div
              className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-gray-800 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.2 }}
            >
              <img
                src={profilePic}
                alt="Profile Picture"
                className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
