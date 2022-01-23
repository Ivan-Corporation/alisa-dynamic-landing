import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";





const Box = ({ img }) => {
  //framer motion animation control
  const animationControl = useAnimation();
  //Hook allow us to control the element in the screen view
  const { inView, entry, ref } = useInView();
  console.log(inView);
  if (inView) {
    animationControl.start({
      x: 0,
      transition: {
        delay: 0.7
      }
    });
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={{
          x: "150vw"
        }}
        animate={animationControl}
        className="box"
      >
        <img src={img} className="tatu"/>
      </motion.div>
      
    </div>
  );
};

export default Box;