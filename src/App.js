import Navbar from "./components/navbar";
import Header from "./components/header";
import OfficialLinks from "./components/officialLinks";
import Mail from "./components/mail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import Myporjects from "./components/myself";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <OfficialLinks />
      <Mail />
      <Myporjects />
    </>
  );
}

export default App;
