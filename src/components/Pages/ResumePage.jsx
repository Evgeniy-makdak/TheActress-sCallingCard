import styles from './Pages.module.css';

const ResumePage = () => {
  return (
    <div>
      <h2 className={styles['dancing-script']}>Resume</h2>
      <p className={styles['pages-content']}>
        Образование: <br />
        <a href="https://rahmaninovschool.spb.ru">
          СПб ГБУ ДО "Санкт-Петербургская детская школа искусств им.
          С.В.Рахманинова"
        </a> <br /> 2018 г. - настоящее время <br /> Театральное отделение.
      </p>
    </div>
  );
};

export default ResumePage;
