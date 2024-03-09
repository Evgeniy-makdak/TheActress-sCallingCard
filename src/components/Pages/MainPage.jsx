import styles from './Pages.module.css';
import mainPhoto from '../images/photos/mainphoto.png';


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