import Navbar from "./components/navbar";
import Header from "./components/header";
import OfficialLinks from "./components/officialLinks";
import Mail from "./components/mail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import Myporjects from "./components/projects";
import Myself from "./components/myself";
import Skill from "./components/skill";
import Experience from "./components/experience";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <OfficialLinks />
      <Mail />
      <Myporjects />
      <Myself />
      <Skill />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
