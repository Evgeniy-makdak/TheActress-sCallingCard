import styles from "./styles/PortfolioPage.module.css";
import mainPhoto from "../../assets/images/mainphoto.png";

const PortfolioPage = () => {
  return (
    <div className={styles["page"]}>
      <img
        src={mainPhoto}
        alt="Виктория Волкова"
        className={styles.image}
      />
    </div>
  );
};

export default PortfolioPage;
