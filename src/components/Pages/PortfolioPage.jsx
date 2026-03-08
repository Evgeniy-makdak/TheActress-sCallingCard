import styles from "./styles/PortfolioPage.module.css";
import portfolioImage from "../../assets/images/portfolio.jpg";
import { useLanguage, translations } from "../../context/LanguageContext";

const PortfolioPage = () => {
  const { language } = useLanguage();
  return (
    <div className={styles["page"]}>
      <div className={styles["pages-content"]} />
      <img
        src={portfolioImage}
        alt={translations[language].alt}
        className={styles.image}
      />
    </div>
  );
};

export default PortfolioPage;
