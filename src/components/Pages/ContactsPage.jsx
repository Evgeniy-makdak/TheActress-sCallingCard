import styles from './styles/ContactsPage.module.css';
import mainPhoto from '../../assets/images/mainphoto.png';

const ContactsPage = () => {
  return (
    <div className={styles['page']}>
      <p className={styles['pages-content']}>
        <div className={styles.articleBorder}>
          <article className={styles.article}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            non laborum impedit, dicta porro recusandae incidunt fugit minima
            pariatur dignissimos et explicabo necessitatibus totam repellendus,
            soluta corrupti accusantium vero? Quibusdam repellat architecto
            maiores, necessitatibus perferendis nostrum atque.
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

export default ContactsPage;
