import "./projects.scss"

const items = [
    {
        id:1,
        title:"Spendwise - Budgeting Web App",
        img:"",
        desc:"SpendWise is an innovative budgeting application designed for optimal efficiency and user convenience. Combining a React.js and Tailwind CSS front-end with a Python-based backend, it streamlines personal finance management. Utilizing third-party banking APIs, it allows users to automatically upload transaction data, reducing manual entry by 85%. The backend, powered by Python's Flask framework, offers efficient data processing for expense categorization, spending trend visualization, and customizable financial goals. SpendWise is not just a tool but a comprehensive solution for informed financial decision-making, delivering functionality with a user-friendly interface.",
    },
    {
        id:2,
        title:"AWSnap - AWS Photo Album Web App",
        img:"",
        desc:"AWSnap is a streamlined web application that exemplifies efficiency and user-centered design in digital photo management. Built on a suite of AWS services, including Amazon S3, AWS Lambda, Amazon API Gateway, AWS DynamoDB, and AWS IAM, this project integrates robust cloud infrastructure with an intuitive interface. The application allows users to seamlessly upload, view, and delete photos. Its high-performance backend, supported by AWS Lambda, optimizes image processing tasks, while Amazon S3 ensures secure and scalable storage. The user-friendly UI, designed with HTML, Tailwind CSS, and JavaScript, features a gallery of uploaded images with an easy deletion option. AWSnap stands as a testament to the successful implementation of cloud technology in enhancing everyday digital experiences.",
    },
    {
        id:3,
        title:"Inventory Management System",
        img:"/Management.jpeg",
        desc:"I developed a Java-based inventory management system designed to enhance efficiency and data integrity. This system efficiently processes shopping lists, updates inventory in real-time, and generates receipts. It incorporates advanced file handling and custom exception handling to ensure reliability. Additionally, I optimized data parsing algorithms for shopping list processing, showcasing my problem-solving skills and attention to detail in software development. This system significantly improves inventory management efficiency, underscoring my commitment to delivering effective and reliable software solutions.",
    },
    {
        id:4,
        title:"Professional Portfolio",
        img:"/Portfolio.png",
        desc:"As a showcase of my expertise in modern web development, I created a Personal Portfolio Website using React. This project highlights my ability to craft interactive and dynamic user interfaces, emphasizing my proficiency in React, Framer Motion, JSX, and SCSS. The portfolio elegantly demonstrates responsive design principles, ensuring a seamless display across various devices. By incorporating Framer Motion, I enhanced the site with smooth and engaging animations, enriching the user experience. The use of SCSS facilitated advanced styling and layout consistency, while JSX allowed for a more efficient and readable code structure. This portfolio not only displays my technical skills but also embodies my personal brand and approach to solving complex web development challenges.",
    },
];

const Single = ({ item }) => {
    return (
        <section id={item.title.replace(/\s+/g, '')} className="projectSection">
            <div className="projectContent">
                <img src={item.img} alt={item.title} className="projectImage" />
                <div className="projectInfo">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {


    return (
        <div className="projects">
        {items.map(item=>(
            <Single item ={item} key={item.id}/>
        ))}
        </div>
    )
}

export default Projects