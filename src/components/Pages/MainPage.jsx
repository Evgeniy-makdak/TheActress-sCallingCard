import mainPhoto from "../../assets/images/mainphoto.png";
import styles from "./styles/MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.imageContainer}>
        <img
          src={mainPhoto}
          alt="Виктория Волкова"
          className={styles.image}
        />
        <div className={styles.textOverlay}>
          Виктория
          <br /> Волкова
        </div>
      </div>
    </div>
  );
};

export default MainPage;
