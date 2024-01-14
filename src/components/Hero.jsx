
import React from "react";
import test from "../assets/test.png"
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import backgroundImage from '../assets/brush.png'
import { useTheme } from './ThemeContext';
function Hero() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();


  return (
    <section className={isDarkMode ? 'dark' : ''}>
      <div className="self-center dark:caret-yellow-950  dark:text-white w-full px-10 lg:px-28 max-w-[1084px] mt-28 lg:mt-24 md:px-20">
        <div className="gap-5  md:flex lg:flex-row md:flex-row max-md:gap-0">

          <motion.div
            className="flex flex-col w-[56%] max-md:w-full max-md:ml-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col my-auto items-start  max-md:mt-8">

              <div className="text-black dark:text-white text-3xl lg:text-4xl font-bold">
                Start Entry <span style={{
                  backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '10px'
                }} > Test</span> <br />
                Preparation with us now
              </div>
              <div className="text-blue-900 dark:text-zinc-400  text-2xl lg:text-3xl self-stretch mt-10 lg:mt-14">
                Start your entry test preparation journey with us today and pave
                the way for success.
              </div>
              <motion.div
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -180 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => {
                    navigate("login");
                  }}
                  className="text-black cursor-pointer text-right text-2xl font-extrabold bg-[#3FE0A5] hover:bg-teal-400 hover:text-white duration-500 justify-center items-stretch mt-12 pl-12 pr-11 lg:py-5 py-3 rounded-[32px] max-md:mt-10 max-md:px-5"
                >
                  Enrol Now
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col w-fit mx-auto lg:w-[44%] "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={test} alt="HeroImage"
              className="lg:ml-52  lg:w-full   "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Hero;


