
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identification from './components/Identification';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Bonus from './components/Bonus';
import WhyCheap from './components/WhyCheap';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Closing from './components/Closing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Identification />
        <Solution />
        <Testimonials />
        <Benefits />
        <Bonus />
        <WhyCheap />
        <Pricing />
        <Guarantee />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
