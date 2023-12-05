import './App.css';
import AboutMe from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import SkillsSection from './components/Skills';
import ContactMe from './components/contact';

function App() {
  return (
    <div className="App">
     <HeroSection />
     <AboutMe />
     <SkillsSection />
     <ContactMe />
     <Footer />
    </div>
  );
}

export default App;
