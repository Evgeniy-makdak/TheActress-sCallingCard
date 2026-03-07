import mainPhoto from "../../assets/images/mainphoto.png";
import { useLanguage, translations } from "../../context/LanguageContext";
import styles from "./styles/MainPage.module.css";

const MainPage = () => {
  const { language } = useLanguage();
  const t = translations[language].mainPage;
  return (
    <div className={styles.page}>
      <div className={styles.imageContainer}>
        <img
          src={mainPhoto}
          alt={translations[language].alt}
          className={styles.image}
        />
        <div className={styles.textOverlay}>
          {t.name}
          <br /> {t.surname}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
