import { FlipWords } from './FlipWords'
import {motion} from 'motion/react';

const HeroText = () => {
  const words=["AI-driven","Scalable","Meaningful"];
  const variants={
    hidden: {opacity: 0, x: -50},
    visible:{opacity: 1, x: 0}
  };
  return (
    <div className="relative z-20 text-left md:text-left rounded-3xl bg-clip-text w-full px-4 sm:px-6 md:px-0 md:mt-40">
      {/* Desktop View */}
      <div className="hidden md:block">
        <motion.h1 
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}>
          Hi I'm Dinithi
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p 
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}>
            Crafting  
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}> 
            <FlipWords 
              words={words}
              className="font-black text-white text-8xl"
            /> 
          </motion.div>
          <motion.p 
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}>
            digital experiences<br/> 
            inspired by data, driven by curiosity
          </motion.p>
        </div>
      </div>

       {/* Mobile View */}
       <div className="flex flex-col space-y-4 md:hidden text-left px-4 w-full max-w-full">
        <motion.h1 
          className="text-3xl sm:text-4xl font-medium leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        > 
          Hi I'm Dinithi 
        </motion.h1>
        <div className="flex flex-col items-start space-y-2 w-full">
          <motion.p 
            className="text-3xl sm:text-4xl font-semibold text-neutral-300 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          > 
            Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="w-full flex justify-start"
          >
            <FlipWords  
              words={words}
              className="font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight"
            /> 
          </motion.div>
          <motion.p 
            className="text-2xl sm:text-3xl font-semibold text-neutral-300 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            digital experiences
          </motion.p>
          <motion.p 
            className="text-lg sm:text-xl font-medium text-neutral-400 mt-1 leading-relaxed"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            inspired by data, driven by curiosity
          </motion.p>
        </div>
       </div>  
       </div>

  );
};

export default HeroText