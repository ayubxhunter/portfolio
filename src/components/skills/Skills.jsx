import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./skills.scss";

const Skills = () => {
    const skillsData = [
        { src: "/html.png", text: "HTML", navigationId: "Spendwise-BudgetingWebApp" },
        { src: "/css.png", text: "CSS", navigationId: "Spendwise-BudgetingWebApp" },
        { src: "/JavaScript.png", text: "JavaScript", navigationId: "Spendwise-BudgetingWebApp" },
        { src: "/react.png", text: "React", navigationId: "ProfessionalPortfolio" },
        { src: "/framer.png", text: "Framer", navigationId: "ProfessionalPortfolio" },
        { src: "python.png", text: "Python", navigationId: "CourseWork"  },
        { src: "/java.png", text: "Java", navigationId: "InventoryManagementSystem" },
        { src: "/tailwind.png", text: "Tailwind", navigationId: "Spendwise-BudgetingWebApp" },
        { src: "/sass.png", text: "Sass", navigationId: "ProfessionalPortfolio" },
        { src: "/git.png", text: "Git", navigationId: "CourseWork", applyGlow: true }
    ];

    const controls = useAnimation();
    const ref = useRef(null);

    const navigateToSection = (navigationId, shouldApplyGlow = false) => {
        const section = document.getElementById(navigationId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            if (shouldApplyGlow) {
                addGlowEffect("Objects and Design");
            }
        }
    };


    const startAnimation = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            controls.start(i => ({ rotate: 360, scale: 1, transition: { delay: i * 0.2 } }));
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
                    onClick={() => navigateToSection(skill.navigationId, skill.applyGlow)}
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