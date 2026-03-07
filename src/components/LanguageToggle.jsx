import { useLanguage } from "../context/LanguageContext";
import styles from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleLanguage}
      title={language === "ru" ? "Switch to English" : "Переключить на русский"}
      aria-label={language === "ru" ? "Switch to English" : "Переключить на русский"}
    >
      {language === "ru" ? "EN" : "RU"}
    </button>
  );
};

export default LanguageToggle;
