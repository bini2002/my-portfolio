import './App.css';
import AboutMe from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
// import ProjectsSection from './components/Projects';
import SkillsSection from './components/Skills';
import ContactMe from './components/contact';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {
useEffect(()=>{
  AOS.init({
    duration: 800,
    once:false,
  });
});

  return (
    <div className="App">
     <HeroSection />
     <AboutMe />
     <SkillsSection />
     {/* <ProjectsSection /> */}
     <ContactMe />
     <Footer />
    </div>
  );
}

export default App;
