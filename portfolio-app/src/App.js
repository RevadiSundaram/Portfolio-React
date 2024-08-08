import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import { About } from './components/About';
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App ">
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Technologies />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
