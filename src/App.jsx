import "./app.scss"
import Myself from "./components/myself/Myself";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Listofprojects from "./components/listofprojects/Listofprojects";

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
    <section id ="CourseWork">Realative CourseWork</section>
    <section id="Contact">Contact</section>
  </div>
};

export default App;
