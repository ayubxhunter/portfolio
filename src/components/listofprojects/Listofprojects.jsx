import "./listofprojects.scss";
import {motion } from "framer-motion"


const Listofprojects = () => {
    const projects = [
        { img: "/budgeting.png", name: "Spendwise - Budgeting Web App" },
        { img: "/Chess.png", name: "Chess Game" },
        { img: "/Inventory.png", name: "Inventory Management System" },
        { img: "/personal.png", name: "Professional Portfolio" },
    ];

    const imageTransition = {
        delay: .5
    };

    const githubUrl = "https://github.com/ayubxhunter"; // URL to my GitHub

    const navigateToProject = (projectName) => {
        const projectId = projectName.replace(/\s+/g, '');
        const projectElement = document.getElementById(projectId);
        if (projectElement) {
            projectElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="listofprojects">
            <h1>Projects</h1>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <div className="projectItem" key={index} onClick={() => navigateToProject(project.name)}>
                    <motion.img 
                        src={project.img} 
                        alt={project.name} 
                        transition={imageTransition}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <p>{project.name}</p>
                    <p className="hoverText">Click Icon to Learn More</p> {/* Added text */}
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>                
                ))}
            </div>
        </div>
    );
};

export default Listofprojects;