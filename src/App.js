import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Projects from './components/layout/Projects';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className='containerr'>
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
