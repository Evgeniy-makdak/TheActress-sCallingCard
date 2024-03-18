import { Link } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';
import styles from '../Pages/App.module.css'; 
import './BurgerMenu.css';

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="burger-menu-line"></div>
      <div className="burger-menu-line"></div>
      <div className="burger-menu-line"></div>
      {isOpen && (
        <div className="burger-menu-links">
          <Link to="/main" className={styles.linkButton}>
            <MyButton>Главная</MyButton>
          </Link>
          <Link to="/biography" className={styles.linkButton}>
            <MyButton>Биография</MyButton>
          </Link>
          <Link to="/portfolio" className={styles.linkButton}>
            <MyButton>Портфолио</MyButton>
          </Link>
          <Link to="/resume" className={styles.linkButton}>
            <MyButton>Резюме</MyButton>
          </Link>
          <Link to="/video" className={styles.linkButton}>
            <MyButton>Видео</MyButton>
          </Link>
          <Link to="/contacts" className={styles.linkButton}>
            <MyButton>Контакты</MyButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
