import "./listofprojects.scss";

const Listofprojects = () => {
    const projects = [
        { img: "/placeholder2.jpeg", name: "Budgeting Web App" },
        { img: "/placeholder.webp", name: "AWS Photo Album Web App" },
        { img: "/Inventory.png.jpeg", name: "Inventory Management System" },
        { img: "/Portfolio.png", name: "Professional Portfolio" },
    ];

    const githubUrl = "https://github.com/ayubxhunter"; // URL to my GitHub

    return (
        <div className="listofprojects">
            <h1>Projects</h1>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <div className="projectItem" key={index}>
                        <img src={project.img} alt={project.name} />
                        <p>{project.name}</p>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Listofprojects;
