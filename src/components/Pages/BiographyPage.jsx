import styles from "./styles/BiographyPage.module.css";
import biographyImage from "../../assets/images/byography.jpg";
import placesInSoty from "../../assets/images/placesInSoty.png";
import { useLanguage, translations } from "../../context/LanguageContext";

const renderWithBreaks = (str) =>
  str.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      {i < str.split("\n").length - 1 && <br />}
    </span>
  ));

const BiographyPage = () => {
  const { language } = useLanguage();
  const t = translations[language].biographyPage;
  return (
    <div className={styles["page"]}>
      <p className={styles["pages-content"]}>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
            {renderWithBreaks(t.text)}
            <a
              href="https://rahmaninovschool.spb.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.rahmaninovLink}
            </a>
            {t.text2}
            <a
              href="https://youtu.be/yzuiKpUkAjA"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.queenOfSpades}
            </a>
            {t.text3}
            <a
              href="https://teatralinayploshadkasoty.tilda.ws/pikdama"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.sotyLink}
            </a>
            {t.text4}
            <a href={placesInSoty} target="_blank" rel="noopener noreferrer">
              {t.hallLink}
            </a>
            {t.text5}
            <a
              href="https://gbarra.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.gracieLink}
            </a>
            {renderWithBreaks(t.text6)}
          </article>
        </div>
      </p>
      <img
        src={biographyImage}
        alt={translations[language].alt}
        className={styles.image}
      />
    </div>
  );
};

export default BiographyPage;
