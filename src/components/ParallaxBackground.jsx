import {motion, useScroll, useTransform, useSpring} from "motion/react";


const ParallaxBackground = () => {
    const {scrollYProgress}=useScroll();
    const x = useSpring(scrollYProgress, {damping: 30, stiffness: 100});
    const mountain3Y=useTransform(x,[0,0.5],["0%","70%"])
    const planetsX=useTransform(x,[0,0.5],["0%","-20%"])
    const mountain2Y=useTransform(x,[0,0.5],["0%","30%"])
    const mountain1Y=useTransform(x,[0,0.5],["0%","0%"])
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="relative w-full h-screen overflow-hidden">
           {/*Background sky */}
           <div className="absolute inset-0 w-full h-full"
           style={{
            backgroundImage:"url(/assets/sky.jpg)",
            backgroundPosition:"bottom",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            zIndex: 1,
           }}/>
            {/*Mountain Layer 3 */}
           <motion.div
           className="absolute inset-0 w-full h-full"
           style={{
            backgroundImage:"url(/assets/mountain-3.png)",
            backgroundPosition:"bottom",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            zIndex: 2,
           }}
           y={mountain3Y}/>
            {/*Planets */}
           <motion.div
            className="absolute inset-0 w-full h-full"
           style={{
            backgroundImage:"url(/assets/planets.png)",
            backgroundPosition:"bottom",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            zIndex: 3,
           }}
           x={planetsX}/>
            {/*Mountain Layer 2 */}
           <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
                backgroundImage:"url(/assets/mountain-2.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat",
                zIndex: 4,
               }}
           y={mountain2Y}
        />
            {/*Mountain Layer 1 */}
           <motion.div
           className="absolute inset-0 w-full h-full"
           style={{
            backgroundImage:"url(/assets/mountain-1.png)",
            backgroundPosition:"bottom",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            zIndex: 5,
           }}
           y={mountain1Y}/>
        </div>
    </div>
    );
    };
    
  

export default ParallaxBackground