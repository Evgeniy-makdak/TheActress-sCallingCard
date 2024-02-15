import React from 'react';
import styles from './Pages.module.css';
import mainPhoto from '../images/Vika_main_page.jpg';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles['dancing-script']}>Main page</h2>
      <div className={styles.imageContainer}>
        <img
          src={mainPhoto}
          alt="Main photo by Victoria"
          className={styles.image}
        />
        <div className={styles.textOverlay} data-content="Виктория Волкова">
          Виктория Волкова
        </div>
      </div>
    </div>
  );
};

export default MainPage;
