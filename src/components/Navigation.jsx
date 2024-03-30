import React from 'react'
import MyButton from './UI/button/MyButton';
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
import BurgerMenu from './BurgerMenu'

const Navigation = ({isMenuOpen, setMenuState}) => {
    const handleClick = () => {
        setMenuState(false)
    }
    return (
        <>
            <BurgerMenu isOpen={isMenuOpen} setMenuState={setMenuState} />
            <div className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}>
            <Link to="/main" className={styles.linkButton}>
                <MyButton onClick={handleClick}>Главная</MyButton>
            </Link>
            <Link to="/biography" className={styles.linkButton}>
                <MyButton onClick={handleClick}>Биография</MyButton>
            </Link>
            <Link to="/portfolio" className={styles.linkButton}>
                <MyButton onClick={handleClick}>Портфолио</MyButton>
            </Link>
            <Link to="/resume" className={styles.linkButton}>
                <MyButton onClick={handleClick}>Резюме</MyButton>
            </Link>
            <Link to="/video" className={styles.linkButton}>
                <MyButton onClick={handleClick}>Видео</MyButton>
            </Link>
            <Link to="/contacts" className={styles.linkButton}>
                <MyButton onClick={handleClick}>Контакты</MyButton>
            </Link>
            </div>
        </>
    );
}

export default Navigation;