import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import GlazingOptions from './components/GlazingOptions';
import PricingSection from './components/PricingSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <GlazingOptions />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
