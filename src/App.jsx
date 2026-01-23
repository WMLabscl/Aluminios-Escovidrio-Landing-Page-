import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CoverageSection from './components/CoverageSection';
import WhatsAppForm from './components/WhatsAppForm';
import Map from './components/Map';
import Footer from './components/Footer';
import SEO from './components/SEO';
import IntroAnimation from './components/IntroAnimation';

function App() {
  return (
    <>
      <IntroAnimation />
      <SEO />
      <div className="min-h-screen bg-light-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <CoverageSection />
          <WhatsAppForm />
          <Map />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
