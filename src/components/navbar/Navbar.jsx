import "./navbar.scss"
import { motion } from "framer-motion";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
    return (
        <div className="navbar">
            {/*Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{ opacity:0, scale:0.5 }} 
                    animate={{ opacity:1, scale:1 }} 
                    transition={{ duration:0.5 }}
                    >
                    Ayub Dev
                </motion.span>
                <div className="social">
                    <motion.a 
                        href="#"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src="/linkedin.png" alt="" />
                    </motion.a>
                    <motion.a 
                        href="#"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src="/github.png" alt="" />
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
