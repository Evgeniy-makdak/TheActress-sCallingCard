import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import BurgerMenu from './components/Pages/BurgerMenu';
import MainPage from './components/Pages/MainPage';
import BiographyPage from './components/Pages/BiographyPage';
import PorfolioPage from './components/Pages/PortfolioPage';
import ResumephyPage from './components/Pages/ResumePage';
import VideoPage from './components/Pages/VideoPage';
import ContactsPage from './components/Pages/ContactsPage';
import MyButton from './components/UI/button/MyButton';
import styles from './components/Pages/App.module.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className={isMenuOpen ? `${styles.navigation} ${styles.open}` : styles.navigation}>
          <Link to="/main" className={styles.linkButton}>
            <MyButton>Главная</MyButton>
          </Link>
          <Link to="/biography" className={styles.linkButton}>
            <MyButton>Биография</MyButton>
          </Link>
          <Link to="/portfolio" className={styles.linkButton}>
            <MyButton>Портфолио</MyButton>
          </Link>
          <Link to="/resume" className={styles.linkButton}>
            <MyButton>Резюме</MyButton>
          </Link>
          <Link to="/video" className={styles.linkButton}>
            <MyButton>Видео</MyButton>
          </Link>
          <Link to="/contacts" className={styles.linkButton}>
            <MyButton>Контакты</MyButton>
          </Link>
        </div>
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
