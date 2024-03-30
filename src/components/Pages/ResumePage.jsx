import styles from './styles/ResumePage.module.css';

const ResumePage = () => {
  return (
    <div className={styles['page']}>
      <h2 className={styles['dancing-script']}>Resume</h2>
      <p className={styles['pages-content']}>
        Образование: <br />
        <a href="https://rahmaninovschool.spb.ru" target='blank'>
          СПб ГБУ ДО "Санкт-Петербургская детская школа искусств им.
          С.В.Рахманинова"
        </a> <br /> 2018 г. - настоящее время <br /> Театральное отделение.
      </p>
    </div>
  );
};

export default ResumePage;
