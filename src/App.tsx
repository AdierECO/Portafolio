import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const LayoutWithNavigation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navigation />
      <main className="flex-grow">
        <Outlet /> {/* Esto renderiza las rutas hijas */}
      </main>
      <Footer />
    </div>
  );
};

const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navigation />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Ruta principal con layout especial */}
          <Route path="/" element={<HomeLayout />} />

          {/* Rutas con layout común */}
          <Route element={<LayoutWithNavigation />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;