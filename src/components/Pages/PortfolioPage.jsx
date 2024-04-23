import styles from './styles/PortfolioPage.module.css';
import mainPhoto from '../../assets/images/mainphoto-min.png';

const PortfolioPage = () => {
  return (
    <div className={styles['page']}>
      <img
        src={mainPhoto}
        alt="Main photo by Victoria"
        className={styles.image}
      />
    </div>
  );
};

export default PortfolioPage;
