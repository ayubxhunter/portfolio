import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./skills.scss";

const Skills = () => {
    const skillsData = [
        { src: "/HTML.png", text: "HTML" },
        { src: "/CSS.png", text: "CSS" },
        { src: "/JavaScript.png", text: "JavaScript" },
        { src: "/react.png", text: "React" },
        { src: "/framer.png", text: "Framer" },
        { src: "python.png", text: "Python" },
        { src: "/java.png", text: "Java" },
        { src: "/C++.png", text: "C++" },
        { src: "/mysql.png", text: "SQL" },
        { src: "/git.png", text: "Git" },
    ];

    const controls = useAnimation();
    const ref = useRef(null);

    const startAnimation = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            controls.start(i => ({ rotate: 360, scale: 1, transition: { delay: i * 0.5 } }));
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(startAnimation, {
            root: null,
            threshold: 0.65, // Adjust as needed
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <div className="skills" ref={ref}>
            <h1>Skills</h1>
            <div className="imageContainer">
                {skillsData.map((skill, i) => (
                    <motion.div 
                      className="imageBox"
                      key={i}
                      initial={{ scale: 0 }}
                      custom={i}
                      animate={controls}
                    >
                        <img src={skill.src} alt={skill.text} />
                        <p>{skill.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;