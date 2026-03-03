import mainPhoto from '../../assets/images/mainphoto.png';
import styles from './styles/MainPage.module.css'

const MainPage = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img
          src={mainPhoto}
          alt="Main photo by Victoria"
          className={styles.image}
        />
        <div className={styles.textOverlay}>
          Виктория<br /> Волкова
        </div>
      </div>
    </>
  );
};

export default MainPage;