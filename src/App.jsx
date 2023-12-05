import './App.css';
import AboutMe from './components/About';
import HeroSection from './components/Hero';
import SkillsSection from './components/Skills';

function App() {
  return (
    <div className="App">
     <HeroSection />
     <AboutMe />
     <SkillsSection />
    </div>
  );
}

export default App;
