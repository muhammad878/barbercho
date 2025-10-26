import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-900">
      <Header />
      <main className="pt-[72px] sm:pt-20 xl:pt-[120px]">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
