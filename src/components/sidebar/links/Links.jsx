import {motion} from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerdChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = ({ setOpen }) => { // Receive setOpen as a prop
    const items = ["About Me", "Skills", "Projects", "CourseWork", "Contact"];

    // Function to handle link clicks
    const handleLinkClick = () => {
        setOpen(false); // Close the sidebar
    };

    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
                <motion.a 
                    href={`#${item}`} 
                    key={item} 
                    variants={itemVariants} 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLinkClick} // Call handleLinkClick when a link is clicked
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links