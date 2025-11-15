import "./App.css";
import { Banner } from "../vite-project/src/components/Banner";
import Navbars from "../vite-project/src/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skill } from "../vite-project/src/components/Skill";
import { Project } from "../vite-project/src/components/Project";
import Contact from "../vite-project/src/components/Contact";
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
