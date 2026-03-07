import styles from "./styles/ResumePage.module.css";
import byographyphoto from "../../assets/images/mainphoto.png";
import { useLanguage, translations } from "../../context/LanguageContext";

const ResumePage = () => {
  const { language } = useLanguage();
  const t = translations[language].resumePage;
  return (
    <div className={styles["page"]}>
      <p className={styles["pages-content"]}>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
            {t.education} <br />
            <a href="https://rahmaninovschool.spb.ru" target="_blank" rel="noopener noreferrer">
              СПб ГБУ ДО "Санкт-Петербургская детская школа искусств им.
              С.В.Рахманинова"
            </a>{" "}
            <br /> {t.years}
            <br /> {t.theaterDept}
          </article>
        </div>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
            {t.education} <br />
            <a href="https://spbdshi3.ru/" target="_blank" rel="noopener noreferrer">
              СПб ГБУ ДО "Санкт-Петербургская детская школа искусств N 3"
            </a>{" "}
            <br /> {t.untilNow}
            <br /> {t.theaterDept}
          </article>
        </div>
      </p>
      <img
        src={byographyphoto}
        alt={translations[language].alt}
        className={styles.image}
      />
    </div>
  );
};

export default ResumePage;
