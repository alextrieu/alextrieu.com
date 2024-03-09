import "./App.css";
import HeroSection from "./Hero/HeroSection";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
