import styles from './styles/BiographyPage.module.css';
import mainPhoto from '../../assets/images/mainphoto.png';

const BiographyPage = () => {
  return (
    <div className={styles['page']}>
      <p className={styles['pages-content']}>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
            Виктория родилась в 2009 году в Новосибирске.
            <br /> В 2013 году вместе с родителями переезжает в Санкт-Петербург.
            <br /> С раннего возраста начинает интересоваться театром, выступает
            на детских театральных конкурсах, получает первые призы. В 2019
            году, пройдя конкурсный отбор, поступает на театральное отделение
            <a href="https://rahmaninovschool.spb.ru" target="blank">
              {' '}
              детской школы искусств имени Рахманинова
            </a>
            . За годы учёбы в ней проявляет себя как творческая личность,
            успешно участвует в конкурсе чтецов, спектаклях, шефских концертах
            для ветеранов ВОВ. В 2023 году впервые выступила на настоящей сцене
            в ТЮЗе, затем - в Большом Театре Кукол. Ей была доверена роль
            Главной ведьмы в спектакле "Маленькая ведьма" поставленном по
            сказочной повести немецкого писателя Отфида Пройслера "Маленькая
            колдунья". Спектакль прошёл с большим успехом. В марте 2024 года
            Вика наравне с преподавателями учиствовала в спектакле "Пиковая
            дама", поставящённого 225-летию со дня рождения А. С. Пушкина. Показ
            спектакля состоялся в ТЮЗе.
            <br />
            Интересы Вики не ограничиваются театральной деятельностью. В течение
            двух лет она занимается бразильским джиу-джитсу в известной во всём
            мире школе <a href="https://gbarra.ru">" Грейси-Барра "</a>,
            аттестуется на серо-белый пояс.
            <br />
            Увлечение английским языком ...
          </article>
        </div>
      </p>
      <img
        src={mainPhoto}
        alt="Main photo by Victoria"
        className={styles.image}
      />
    </div>
  );
};

export default BiographyPage;
