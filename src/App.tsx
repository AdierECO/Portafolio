import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const LayoutWithNavigation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navigation />
      <main>
        <Outlet /> {/* Esto renderiza las rutas hijas */}
      </main>
    </div>
  );
};

const HomeLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navigation />
      <Hero />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal con layout especial */}
        <Route path="/" element={<HomeLayout />} />
        
        {/* Rutas con layout común */}
        <Route element={<LayoutWithNavigation />}>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;