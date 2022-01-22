import React from "react";
import { motion } from "framer-motion";
import cat from '../theme/cat.png'

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className="logo"><img src={cat} style={{width:'210px'}}/></div>
        <nav className='nav'>
          <li>
            <a href='/design'>Бренд</a>
          </li>
          <li>
            <a href='/cases'>Работы</a>
          </li>
          <li>
            <a href='/about'>О нас</a>
          </li>
        </nav>
        
       
      </div>
    </motion.div>
  );
};

export default Header;
