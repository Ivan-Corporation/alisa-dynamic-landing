import React from "react";
import { motion } from "framer-motion";
import cat from '../theme/cat.png'
import catborder from '../theme/cat4.png'

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
            <a href='/'>Бренд</a>
          </li>
          <li>
            <a href='./#examples'>Работы</a>
          </li>
          <li>
            <a href='/#about'>О нас</a>
          </li>
          <li>
            <a href='/#personal'>Сотрудники</a>
          </li>
          <li>
            <a href='/#contacts'>Связь</a>
          </li>
        </nav>
        
        <div className="catborder"><img src={catborder} style={{width:'210px', paddingTop:'56px'}}/></div>

      </div>
    </motion.div>
  );
};

export default Header;
