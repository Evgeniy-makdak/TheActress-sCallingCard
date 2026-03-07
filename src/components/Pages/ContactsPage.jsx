import styles from "./styles/ContactsPage.module.css";
import mainPhoto from "../../assets/images/mainphoto.png";
import { useLanguage, translations } from "../../context/LanguageContext";

const ContactsPage = () => {
  const { language } = useLanguage();
  const t = translations[language].contactsPage;
  return (
    <div className={styles["page"]}>
      <p className={styles["pages-content"]}>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
            {t.text}
          </article>
        </div>
      </p>
      <img
        src={mainPhoto}
        alt={translations[language].alt}
        className={styles.image}
      />
    </div>
  );
};

export default ContactsPage;
