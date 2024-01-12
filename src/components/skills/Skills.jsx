import "./skills.scss"

const Skills = () => {
    const skillsData = [
        { src: "/HTML.png", text: "HTML" },
        { src: "/CSS.png", text: "CSS" },
        { src: "/JavaScript.png", text: "JavaScript" },
        // ...add more objects for each skill...
    ];

    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="imageContainer">
                {skillsData.map((skill, i) => (
                    <div className="imageBox" key={i}>
                        <img src={skill.src} alt={skill.text} />
                        <p>{skill.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills