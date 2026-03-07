import React from "react";
import MyButton from "./UI/button/MyButton";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../context/LanguageContext";
import styles from "./Navigation.module.css";
import BurgerMenu from "./BurgerMenu";

const Navigation = ({ isMenuOpen, setMenuState }) => {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const handleClick = () => {
    setMenuState(false);
  };
  return (
    <>
      <BurgerMenu isOpen={isMenuOpen} setMenuState={setMenuState} />
      <div className={`${styles.navigation} ${isMenuOpen ? styles.open : ""}`}>
        <Link to="/main" className={styles.linkButton}>
          <MyButton onClick={handleClick}>{t.main}</MyButton>
        </Link>
        <Link to="/biography" className={styles.linkButton}>
          <MyButton onClick={handleClick}>{t.biography}</MyButton>
        </Link>
        <Link to="/portfolio" className={styles.linkButton}>
          <MyButton onClick={handleClick}>{t.portfolio}</MyButton>
        </Link>
        <Link to="/resume" className={styles.linkButton}>
          <MyButton onClick={handleClick}>{t.resume}</MyButton>
        </Link>
        <Link to="/video" className={styles.linkButton}>
          <MyButton onClick={handleClick}>{t.video}</MyButton>
        </Link>
        <Link to="/contacts" className={styles.linkButton}>
          <MyButton onClick={handleClick}>{t.contacts}</MyButton>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
