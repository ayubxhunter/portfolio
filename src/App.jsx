import "./app.scss"
import Myself from "./components/myself/Myself";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id ="About Me">
      <Navbar/>
      <Myself/>
      
    </section>
    <section id ="Skills">My Skills</section>
    <section id ="Projects">Projects</section>
    <section>My Skills</section>
    <section id ="CourseWork">Realative CourseWork</section>
    <section id="Contact">Contact</section>
  </div>
};

export default App;
