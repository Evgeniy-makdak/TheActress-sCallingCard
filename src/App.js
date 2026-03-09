import { useState } from "react";
import { createPortal } from "react-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  LanguageProvider,
  useLanguage,
  translations,
} from "./context/LanguageContext";
import Navigation from "./components/Navigation";
import LanguageToggle from "./components/LanguageToggle";
import MainPage from "./components/Pages/MainPage";
import BiographyPage from "./components/Pages/BiographyPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import ResumePage from "./components/Pages/ResumePage";
import VideoPage from "./components/Pages/VideoPage";
import ContactsPage from "./components/Pages/ContactsPage";
import appStyles from "./styles/App.module.css";

function CopyrightFooter() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "#ffffff",
        fontSize: "14px",
        fontStyle: "italic",
        padding: "16px",
        zIndex: 9999,
      }}
    >
      © 2024-{new Date().getFullYear()} {t.copyright}
    </footer>
  );
}

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Router>
        <LanguageToggle />
        <div className={appStyles.App}>
          <Navigation isMenuOpen={menuOpen} setMenuState={setMenuOpen} />
          <div className={appStyles.mainContent}>
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
        </div>
      </Router>
      {createPortal(<CopyrightFooter />, document.body)}
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
