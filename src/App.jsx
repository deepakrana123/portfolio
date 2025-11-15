import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import Navbars from "./components/Navbar";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbars />
      <Banner />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
