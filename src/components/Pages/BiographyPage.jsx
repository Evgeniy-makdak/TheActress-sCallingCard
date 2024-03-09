import styles from './Pages.module.css';

const BiographyPage = () => {
  return (
    <div>
      <h2 className={styles['dancing-script']}>Биография</h2>
      <p className={styles['pages-content']}>
        <h2 className={styles.titles}>Виктория Волкова родилась 30 июня 2009 года в городе Новосибирске</h2>
        <article className={styles.article}>
          В 2013 году вместе с родителями переезжает в Санкт-Петербург. С раннего детского возраста начинает интересоваться
          театром, выступает на детских театральных конкурсах, получает первые награды.<br />
          Пройдя конкурсный отбор, поступает на театральное отделение детской школы искусств имени Рахманинова.
        </article>
      </p>
    </div>
  );
};

export default BiographyPage;
