import "./app.scss"
import Myself from "./components/myself/Myself";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Listofprojects from "./components/listofprojects/Listofprojects";
import Coursework from "./components/coursework/Coursework";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id ="About Me">
      <Navbar/>
      <Myself/>
    
    </section>
    <section id ="Skills">
      <Skills/>
    </section>
    <section id ="Projects">
      <Listofprojects/>
    </section>
      <Projects />
    <section id ="CourseWork">
      <Coursework/>
    </section>
    <section id="Contact">
      <Contact/>
    </section>
  </div>
};

export default App;
