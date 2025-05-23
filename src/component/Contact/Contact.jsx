import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs
         .sendForm(
            "service_se7rivo",
            "template_b941elg",
            form.current,
            "udGj2_-JvXBkCXsxX"
         )
         .then(
            (result) => {
               console.log(result.text);
               e.target.reset();
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   return (
      <motion.section 
         className="md:pt-12 pt-20 mb-12 bg-black text-white" 
         id="contact"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
      >
         <div className="container mx-auto px-6 sm:px-8 md:px-16">
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h4 className="text-4xl font-bold text-primary text-center mb-4">Contact With Me</h4>
               <h3 className="font-semibold text-lg sm:text-xl mb-4 text-center text-gray-400">
                  {"<-~-"} If you have any queries? {"-~->"}
               </h3>
            </motion.div>
            
            <div className="pt-6 grid md:grid-cols-2 gap-8">
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
               >
                  <form ref={form} onSubmit={sendEmail} className="rounded-lg shadow-lg bg-gray-800 p-6">
                     <input type="text" name="user_name" className="w-full px-4 py-3 mb-4 bg-[#1a1919] border border-gray-700 rounded text-gray-200 focus:outline-none" placeholder="Full Name" />
                     <input type="email" name="user_email" className="w-full px-4 py-3 mb-4 bg-[#1a1919] border border-gray-700 rounded text-gray-200 focus:outline-none" placeholder="Email address" />
                     <textarea name="message" className="w-full px-4 py-3 mb-4 bg-[#1a1919] border border-gray-700 rounded text-gray-200 focus:outline-none" rows="3" placeholder="Message....."></textarea>
                     <button type="submit" className="w-full px-6 py-3 bg-primary text-gray-200 font-semibold rounded shadow-md hover:scale-105 transition-all duration-300">Submit</button>
                  </form>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
               >
                  <div className="flex flex-wrap gap-6">
                     {[{
                        icon: <MdEmail />, title: "Email", text: "developermamun1999@gmail.com"
                     }, {
                        icon: <BsTelephoneFill />, title: "Phone Number", text: "+880 1795920956"
                     }, {
                        icon: <BsLinkedin />, title: "LinkedIn", text: "Linkedin Profile", link: "https://www.linkedin.com/in/md-ripas-ali-b42a01257/"
                     }, {
                        icon: <MdLocationOn />, title: "Location", text: "Panchagarh, Rajshahi Bangladesh"
                     }].map((info, index) => (
                        <motion.div 
                           key={index} 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8, delay: index * 0.2 }}
                           className="w-full sm:w-6/12 flex items-start"
                        >
                           <div className="p-4 rounded-md shadow-md bg-primary h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
                              {info.link ? <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray2 text-3xl sm:text-4xl">{info.icon}</a> : <span className="text-gray2 text-3xl sm:text-4xl">{info.icon}</span>}
                           </div>
                           <div className="grow ml-4">
                              <p className="font-bold text-gray2 mb-1">{info.title}</p>
                              {info.link ? <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray-200">{info.text}</a> : <p className="text-gray1">{info.text}</p>}
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>
      </motion.section>
   );
};

export default Contact;
