import "./navbar.scss"
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className="navbar">
            {/*Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{ opacity:0, scale:0.5 }} 
                    animate={{ opacity:1, scale:1 }} 
                    transition={{ duration:0.5 }}>
                </motion.span>
                <div className="social">
                    <motion.a 
                        href="https://www.linkedin.com/in/ayub-hunter/"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" />
                    </motion.a>
                    <motion.a 
                        href="https://github.com/ayubxhunter"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        target="_blank" rel="noopener noreferrer">
                        <img src="/github.png" alt="GitHub" />
                    </motion.a>
                    <motion.a 
                        href="https://drive.google.com/file/d/1IggEm6WCZ6ptwWcfWf5EM5RTKg0ShTfy/view?usp=sharing"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        target="_blank" rel="noopener noreferrer">
                        <img src="/resume.png" alt="Resume" />
                    </motion.a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;