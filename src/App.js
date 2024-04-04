import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navigation from './components/Navigation';
import MainPage from './components/Pages/MainPage';
import BiographyPage from './components/Pages/BiographyPage';
import PortfolioPage from './components/Pages/PortfolioPage'; 
import ResumePage from './components/Pages/ResumePage'; 
import VideoPage from './components/Pages/VideoPage';
import ContactsPage from './components/Pages/ContactsPage';
import styles from './styles/App.module.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router> 
      <div className={styles.App}>
        <Navigation isMenuOpen={isMenuOpen} setMenuState={setIsMenuOpen}/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/biography" element={<BiographyPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

