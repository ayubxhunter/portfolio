import "./myself.scss"
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChilderen: 0.1,
        },
    },
};

const sliderVariants = {
    initial: {
        x: -0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat:Infinity,
            repeatType:"mirror",
            duration: 20,
        },
    },
};

const Myself = () => {
    return (
        <div className="myself">
            <div className="wrapper">  
                <motion.div className="textContainer" variants ={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants ={textVariants}>Ayub Hunter</motion.h2>
                    <motion.h1 variants ={textVariants}>Software Engineer and Web Developer</motion.h1>
                    <motion.div variants ={textVariants} className="buttons">
                        <motion.button variants ={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants ={textVariants} src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingContainer" variants={sliderVariants} initial="initial" animate="animate">
                Designer Engineer Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/Myself.png" alt="" />
            </div>
        </div>
        
    )
}

export default Myself