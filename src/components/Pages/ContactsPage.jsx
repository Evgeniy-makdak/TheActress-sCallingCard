import styles from "./styles/ContactsPage.module.css";
import contactsImage from "../../assets/images/contacts.jpg";
import { useLanguage, translations } from "../../context/LanguageContext";

const ContactsPage = () => {
  const { language } = useLanguage();
  return (
    <div className={styles["page"]}>
      <div className={styles["pages-content"]} />
      <img
        src={contactsImage}
        alt={translations[language].alt}
        className={styles.image}
      />
    </div>
  );
};

export default ContactsPage;
