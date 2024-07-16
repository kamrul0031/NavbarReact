import { useState } from "react";
import {motion, spring} from 'framer-motion';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const motionContainerVariant ={
    hidden:{
opacity:0,
scale:0,
    },
    visible:{
opacity:1,
scale:[5,1],
    }
  }
  return (
    <motion.div
    variants={motionContainerVariant}
    initial="hidden"
    animate="visible"
    >
      <nav className="bg-slate-800 h-14">
        <ul className="px-5 text-white capitalize h-full flex items-center justify-between">
          <li>logo</li>
         {click ? <motion.div
         whileHover={{rotate:360,scale:1.5}}
         ><svg
          onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg></motion.div> : <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 md:hidden"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          
        }
          <ul
           className="md:flex items-center h-full gap-10 hidden">
            <motion.li
          whileHover={{scale:1.4}}
             transition={{delay:0.1}}
             className="cursor-pointer hover:border-b-2 ">home</motion.li>
            <motion.li
          whileHover={{scale:1.4}}
             transition={{delay:0.1}}
             className="cursor-pointer hover:border-b-2 ">about</motion.li>
            <motion.li
          whileHover={{scale:1.4}}
             transition={{delay:0.1}}
             className="cursor-pointer hover:border-b-2 ">services</motion.li>
            <motion.li
          whileHover={{scale:1.4}}
             transition={{delay:0.1}}
             className="cursor-pointer hover:border-b-2 ">contact</motion.li>
          </ul>
        </ul>
      </nav>
      {click && (
        <div className="bg-red-400">
          <ul className="bg-slate-600 text-white p-5 capitalize w-full flex flex-col justify-around items-center md:hidden">
            <li className="cursor-pointer hover:bg-slate-400 w-full p-3 rounded-xl grid place-items-center">home</li>
            <li className="cursor-pointer hover:bg-slate-400 w-full p-3 rounded-xl grid place-items-center">about</li>
            <li className="cursor-pointer hover:bg-slate-400 w-full p-3 rounded-xl grid place-items-center">services</li>
            <li className="cursor-pointer hover:bg-slate-400 w-full p-3 rounded-xl grid place-items-center">contact</li>
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
