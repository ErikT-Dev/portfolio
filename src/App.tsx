import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import { BackgroundColorProvider, useBackgroundColor } from './utils/BackgroundColorContext';

const AppContent: React.FC = () => {
  const { backgroundColor } = useBackgroundColor();

  return (
    <div className="flex flex-col min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/home.jpg)`

      }}>
      <div
        className="flex-grow flex flex-col w-full bg-opacity-50"
        style={{
          backgroundColor,
          transition: 'background-color 1s ease-in-out'
        }}
      >
        <Header />
        <main className="flex-grow w-full">
          <div className="container mx-auto px-4 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/:projectId" element={<ProjectPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BackgroundColorProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <AppContent />
      </Router>
    </BackgroundColorProvider>
  );
};

export default App;