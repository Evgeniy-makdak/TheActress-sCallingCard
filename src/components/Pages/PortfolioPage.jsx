import styles from "./styles/PortfolioPage.module.css";
import mainPhoto from "../../assets/images/mainphoto.png";
import { useLanguage, translations } from "../../context/LanguageContext";

const PortfolioPage = () => {
  const { language } = useLanguage();
  return (
    <div className={styles["page"]}>
      <img
        src={mainPhoto}
        alt={translations[language].alt}
        className={styles.image}
      />
    </div>
  );
};

export default PortfolioPage;
