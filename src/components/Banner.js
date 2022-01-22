import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cat2 from '../theme/cat2.png';

;



const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"салон"} />
      <BannerRowCenter title={"Алиса"} playMarquee={playMarquee} />
      <BannerRowBottom title={"красоты"} />
      
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
      <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.4,
        }}
        className='row-col'>
        <span className='row-message'>
        <blockquote>Быть можно дельным человеком<br/> И думать о красе ногтей.</blockquote> <p className="pushkin">А.С.Пушкин - "Евгений Онегин"</p>
        
        <img src={cat2} style={{
        width:'400px',
        position: 'absolute',
        right: '100px',
        top: '187px',
        zIndex:'101',
    
      }}/></span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          Крутите вниз
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          <b>↓</b>
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={title}  />

      </motion.div>
    </div>
  );
};

export default Banner;
