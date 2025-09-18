import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Layout component que incluye Navigation en todas las páginas
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navigation />
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página principal con Hero */}
          <Route path="/" element={
            <Layout>
              <Hero />
            </Layout>
          } />
          
          {/* Página About */}
          <Route path="/about" element={
            <Layout>
              <div className="pt-16">
                <About />
              </div>
            </Layout>
          } />
          
          {/* Página Projects */}
          <Route path="/projects" element={
            <Layout>
              <div className="pt-16">
                <Projects />
              </div>
            </Layout>
          } />
          
          {/* Página Contact */}
          <Route path="/contact" element={
            <Layout>
              <div className="pt-16">
                <Contact />
              </div>
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;