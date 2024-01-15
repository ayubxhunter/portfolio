import "./projects.scss"

const items = [
    {
        id:1,
        title:"Spendwise - Budgeting Web App",
        img:"/Spendwise.png",
        desc:(
            <span>
                SpendWise is an innovative budgeting application designed for optimal efficiency and user convenience. 
                Utilizing <span style ={{ color: '#52d6f4'}}><strong>React.js and Tailwind CSS for front-end, </strong></span> 
                it streamlines personal finance management. 
                Through the integration of <span style ={{ color: '#52d6f4'}}><strong>CSV file uploads,</strong></span> users can effortlessly import bulk transaction data, bypassing time-
                consuming manual entry.
                <span style ={{ color: '#52d6f4'}}><strong> Reducing manual entry by 85%</strong></span>. 
                The site offers <span style ={{ color: '#52d6f4'}}><strong>efficient data processing </strong></span> 
                for expense categorization, spending trend visualization, 
                and <span style ={{ color: '#52d6f4'}}><strong>customizable financial goals</strong></span>. 
                SpendWise is not just a tool but a comprehensive solution for informed financial decision-making, 
                delivering functionality with a user-friendly interface.
            </span>),
    },
    {
        id:2,
        title:"AWSnap - AWS Photo Album Web App",
        img:"",
        desc:(
            <span>
                AWSnap is a streamlined web application that 
                exemplifies <span style={{ color: '#52d6f4'}}><strong>efficiency </strong></span> 
                and user-centered design in digital photo management. Built on a 
                suite of <span style={{ color: '#52d6f4'}}><strong>AWS services</strong></span>, 
                including <span style={{ color: '#52d6f4'}}><strong>Amazon S3, AWS Lambda, Amazon API Gateway, AWS DynamoDB</strong></span>, 
                and <span style={{ color: '#52d6f4'}}><strong>AWS IAM</strong></span>, this project integrates robust 
                cloud infrastructure with an intuitive interface. The application allows users to seamlessly upload, view, 
                and delete photos. Its high-performance backend, supported 
                by <span style={{ color: '#52d6f4'}}><strong>AWS Lambda</strong></span>, 
                <span style={{ color: '#52d6f4'}}><strong> optimizes</strong></span> image processing tasks, 
                while <span style={{ color: '#52d6f4'}}><strong>Amazon S3</strong></span> ensures secure and scalable storage. 
                The user-friendly UI, designed with <span style={{ color: '#52d6f4'}}><strong>HTML, Tailwind CSS, and JavaScript</strong></span>, 
                features a gallery of uploaded images with an easy deletion option. AWSnap stands 
                as a testament to the  successful implementation of cloud technology in enhancing everyday digital experiences.
            </span>),
    },
    {
        id:3,
        title:"Inventory Management System",
        img:"/Management.jpeg",
        desc:(
            <span>
                I developed a <span style={{ color: '#52d6f4'}}><strong>Java-based</strong></span> inventory
                 management system designed 
                 to enhance <span style={{ color: '#52d6f4'}}><strong>efficiency</strong></span> 
                 and <span style={{ color: '#52d6f4'}}><strong>data integrity</strong></span>. 
                 This system efficiently processes shopping lists, updates inventory in real-time, and generates receipts. 
                 It incorporates advanced <span style={{ color: '#52d6f4'}}><strong>file handling </strong></span> 
                 and <span style={{ color: '#52d6f4'}}><strong> custom exception handling</strong></span> to ensure 
                 reliability. Additionally, I <span style={{ color: '#52d6f4'}}><strong>optimized data parsing algorithms </strong></span> 
                 for shopping list processing, showcasing my <span style={{ color: '#52d6f4'}}><strong>problem-solving skills </strong></span> 
                 and <span style={{ color: '#52d6f4'}}><strong>attention to detail</strong></span> in software development. 
                 This system significantly improves inventory management <span style={{ color: '#52d6f4'}}><strong>efficiency</strong></span>, 
                 underscoring my commitment to delivering effective and reliable software solutions.
            </span>) 
    },
    {
        id:4,
        title:"Professional Portfolio",
        img:"/Portfolio.png",
        desc: (
            <span>
                As a showcase of my expertise in <span style={{ color: '#52d6f4'}}><strong>modern web development</strong></span>, I created a Personal Portfolio Website using <span style={{ color: '#52d6f4'}}><strong>React</strong></span>. 
                This project highlights my ability to craft interactive and <span style={{ color: '#52d6f4'}}><strong>dynamic</strong></span> user interfaces, 
                emphasizing my proficiency in <span style={{ color: '#52d6f4'}}><strong>React</strong></span>, 
                <span style={{ color: '#52d6f4'}}><strong> Framer Motion</strong></span>, 
                <span style={{ color: '#52d6f4'}}><strong> JSX</strong></span>, and 
                <span style={{ color: '#52d6f4'}}><strong> SCSS</strong></span>. 
                The portfolio demonstrates <span style={{ color: '#52d6f4'}}><strong>responsive design principles</strong></span>, 
                ensuring a seamless display across various devices. 
                By incorporating <span style={{ color: '#52d6f4'}}><strong>Framer Motion</strong></span>, 
                I enhanced the site with smooth and engaging animations, enriching the user experience. 
                The use of <span style={{ color: '#52d6f4'}}><strong>SCSS</strong></span> facilitated advanced styling and layout consistency, 
                while <span style={{ color: '#52d6f4'}}><strong>JSX</strong></span> allowed for a more efficient and readable code structure. 
                This portfolio not only displays my technical skills but also embodies my personal brand and approach to solving complex web development challenges.
            </span>)
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