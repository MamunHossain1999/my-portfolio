import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      name: "FoodSharing",
      image:
        "https://img.freepik.com/free-photo/merchant-giving-package-courier_482257-90451.jpg?ga=GA1.1.1062747228.1733425109&semt=ais_hybrid",
      description:
        "FoodSharing is a platform where users can share excess food with others in need. It's a community-driven initiative to reduce food waste and help those who are struggling with hunger.",
      liveLink: "https://foodsharing-96323.web.app",
      githubLink:
        "https://github.com/programming-hero-web-course2/b10a11-client-side-MamunHossain1999",
    },
    {
      name: "Movie-Portal",
      image:
        "https://img.freepik.com/free-vector/vector-banner-movie-time_107791-8496.jpg?ga=GA1.1.1062747228.1733425109&semt=ais_hybrid",
      description:
        "Movie-Portal is an online platform where movie enthusiasts can browse, rate, and review their favorite movies. It provides information about movies, including cast, director, and release dates.",
      liveLink: "https://movie-portal-9cc54.web.app",
      githubLink:
        "https://github.com/programming-hero-web-course2/b10-a10-client-side-MamunHossain1999",
    },
    {
      name: "Eco-Adventure",
      image:
        "https://img.freepik.com/free-vector/flat-people-taking-photos-monkey_23-2149012394.jpg?ga=GA1.1.1062747228.1733425109&semt=ais_hybrid",
      description:
        "Eco-Adventure is a blog website dedicated to eco-friendly adventures. It features different types of adventure activities that focus on environmental sustainability, like eco-tourism and wildlife conservation.",
      liveLink: "https://eco-adventure-3a30f.web.app",
      githubLink:
        "https://github.com/programming-hero-web-course1/b10-a9-authentication-MamunHossain1999",
    },
  ];

  return (
    <div id="projects" className="py-10 bg-[#121212] w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-[#1E293B] rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4 flex justify-between">
                  <motion.a
                    href={project.liveLink}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Live Link
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    GitHub Link
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
