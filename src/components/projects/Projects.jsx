import "./projects.scss"
import {motion, useScroll} from "framer-motion";

const items = [
    {
        id:1,
        title:"Budgeting Web App",
        img:"",
        desc:"",
    },
    {
        id:2,
        title:"AWS Photo Album Web App ",
        img:"",
        desc:"",
    },
    {
        id:3,
        title:"Inventory Management System",
        img:"",
        desc:"",
    },
    {
        id:4,
        title:"Professional Portfolio",
        img:"",
        desc:"",
    },
];

const Single = ({ item }) => {
    return <section>{item.title}</section>
}

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