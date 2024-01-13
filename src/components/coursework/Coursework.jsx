import "./coursework.scss";

const Coursework = () => {
    const courses = [
        { 
            title: "Computer Orginization and Programming", 
            description: (<span>

                <li><span>Explored digital logic structures, the Von Neumann model,
                and <span style ={{ color: '#52d6f4'}}><strong>assembly language programming.</strong></span></span></li>
                <li><span>Became proficient in the <span style ={{ color: '#52d6f4'}}><strong>C programming language.</strong></span></span></li>
                
                </span>)
        },
        { 
            title: "Data Structures and Algorithims", 
            description: (<span>
                    <li><span>Enhanced my <span style ={{ color: '#52d6f4'}}><strong>Java programming</strong></span> skills.</span></li>
                    <li><span>Mastered Sorting and Pattern Matching Algorithms, Memoization, Dynamic Programming, and Big-O notation.</span></li>
            </span>)
        },
        { 
            title: "Object Oriented Programming", 
            description: (<span>
                <li><span>Mastered object-oriented programming in <span style ={{ color: '#52d6f4'}}><strong>Java</strong></span>.</span></li>
                <li><span> Explored <span style ={{ color: '#52d6f4'}}><strong>encapsulation, inheritance, and polymorphism</strong></span>.</span></li>
                <li><span> Dealt with exception handling, and GUI programming.</span></li>
        </span>)
    },
        { 
            title: "Objects and Design", 
            description: (<span>
                <li><span>Gained expertise in version control with <span style ={{ color: '#52d6f4'}}><strong>Git</strong></span>.</span></li>
                <li><span> Learned to analyze requirements, design solutions using  <span style ={{ color: '#52d6f4'}}><strong>UML</strong></span>, and apply design principles effectively.</span></li>
                <li><span> Utilized tools like <span style ={{ color: '#52d6f4'}}><strong>JUnit</strong></span> to test our applications.</span></li>
        </span>)
    },
        { 
            title: "User-Interface Design", 
            description: (<span>
                <li><span> Designed a user-centric interface for a Haptic Wearable Belt.</span></li>
                <li><span> Created a user study research protocol to <span style ={{ color: '#52d6f4'}}><strong>gather qualitative data</strong></span>.</span></li>
        </span>)
    },
    { 
        title: "Computing", 
        description: (<span>
            <li><span>Improved my <span style ={{ color: '#52d6f4'}}><strong>Python programming</strong></span> skills.</span></li>
            <li><span> Acquired proficiency in object-oriented programming in <span style ={{ color: '#52d6f4'}}><strong>Python</strong></span>.</span></li>
            <li><span> Wrote programs that include <span style ={{ color: '#52d6f4'}}><strong>function implementation, data structure usage</strong></span>, recursion, user interaction, and input validation.</span></li>
        </span>)
    },
    ];

    return (
        <div className="coursework">
            <h1>Coursework🐝</h1>
            <div className="coursesContainer">
                {courses.map((course, index) => (
                    <div className="courseItem" key={index}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coursework;
