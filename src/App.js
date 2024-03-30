import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './components/Pages/MainPage';
import BiographyPage from './components/Pages/BiographyPage';
import PorfolioPage from './components/Pages/PortfolioPage';
import ResumephyPage from './components/Pages/ResumePage';
import VideoPage from './components/Pages/VideoPage';
import ContactsPage from './components/Pages/ContactsPage';
import styles from './styles/App.module.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navigation isMenuOpen={isMenuOpen} setMenuState={setIsMenuOpen}/>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/biography" element={<BiographyPage />} />
          <Route path="/portfolio" element={<PorfolioPage />} />
          <Route path="/resume" element={<ResumephyPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
