import styles from './styles/PortfolioPage.module.css'
import mainPhoto from '../../assets/images/mainphoto.png';

const PortfolioPage = () => {
    return (
        <div className={styles['page']}>
            <h2 className={styles['dancing-script']}>My Porfolio</h2>
            <img
                src={mainPhoto}
                alt="Main photo by Victoria"
                className={styles.image}
            />
        </div>
    );
};

export default PortfolioPage;