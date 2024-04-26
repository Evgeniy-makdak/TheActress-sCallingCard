import styles from './styles/ResumePage.module.css';
import byographyphoto from '../../assets/images/byographyphoto-min.png';

const ResumePage = () => {
  return (
    <div className={styles['page']}>
      <p className={styles['pages-content']}>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
          Образование: <br />
          <a href="https://rahmaninovschool.spb.ru" target="blank">
            СПб ГБУ ДО "Санкт-Петербургская детская школа искусств им.
            С.В.Рахманинова"
          </a>{' '}
          <br /> 2018 г. - настоящее время <br /> Театральное отделение.
          </article>
        </div>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
          Следующий пункт резюме
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
