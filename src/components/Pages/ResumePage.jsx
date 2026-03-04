import styles from "./styles/ResumePage.module.css";
// TODO: заменить на byographyphoto.png, когда файл будет добавлен
import byographyphoto from "../../assets/images/mainphoto.png";

const ResumePage = () => {
  return (
    <div className={styles["page"]}>
      <p className={styles["pages-content"]}>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
            Образование: <br />
            <a href="https://rahmaninovschool.spb.ru" target="blank">
              СПб ГБУ ДО "Санкт-Петербургская детская школа искусств им.
              С.В.Рахманинова"
            </a>{" "}
            <br /> 2018 г. - 2025 г.
            <br /> Театральное отделение.
          </article>
        </div>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
            Образование: <br />
            <a href="https://spbdshi3.ru/" target="blank">
              СПб ГБУ ДО ''Санкт-Петербургская детская школа искусств N 3"
            </a>{" "}
            <br /> 2025 г. - настоящее время.
            <br /> Театральное отделение.
          </article>
        </div>
      </p>
      <img
        src={byographyphoto}
        alt="byographyphoto by Victoria"
        className={styles.image}
      />
    </div>
  );
};

export default ResumePage;
