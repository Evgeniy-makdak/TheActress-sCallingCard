import { Link } from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/LanguageContext";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ isOpen, setMenuState }) => {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const classes = [styles["burger-menu"]];

  if (isOpen) {
    classes.push(styles["open"]);
  }

  return (
    <div className={classes.join(" ")} onClick={() => setMenuState((prev) => !prev)}>
      <div className={styles["burger-menu-line"]}></div>
      <div className={styles["burger-menu-line"]}></div>
      <div className={styles["burger-menu-line"]}></div>
      {isOpen && (
        <div className={styles["burger-menu-links"]}>
          <Link to="/main" className={styles.linkButton}>
            <MyButton>{t.main}</MyButton>
          </Link>
          <Link to="/biography" className={styles.linkButton}>
            <MyButton>{t.biography}</MyButton>
          </Link>
          <Link to="/portfolio" className={styles.linkButton}>
            <MyButton>{t.portfolio}</MyButton>
          </Link>
          <Link to="/resume" className={styles.linkButton}>
            <MyButton>{t.resume}</MyButton>
          </Link>
          <Link to="/video" className={styles.linkButton}>
            <MyButton>{t.video}</MyButton>
          </Link>
          <Link to="/contacts" className={styles.linkButton}>
            <MyButton>{t.contacts}</MyButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
