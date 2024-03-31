import styles from './styles/ResumePage.module.css';
import mainPhoto from '../../assets/images/mainphoto.png';

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
      <img
          src={mainPhoto}
          alt="Main photo by Victoria"
          className={styles.image}
      />
    </div>
  );
};

export default ResumePage;