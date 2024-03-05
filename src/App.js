import React from 'react';
import styles from './components/Pages/App.module.css'
import MyButton from './components/UI/button/MyButton';
import BiographyPage from './components/Pages/BiographyPage';
import PorfolioPage from './components/Pages/PortfolioPage';
import ResumephyPage from './components/Pages/ResumePage';
import VideoPage from './components/Pages/VideoPage';
import ContactsPage from './components/Pages/ContactsPage';
import MainPage from './components/Pages/MainPage';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <div className={styles.navigation}>
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