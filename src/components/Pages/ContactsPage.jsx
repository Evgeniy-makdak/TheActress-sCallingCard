import styles from './styles/ContactsPage.module.css'
import mainPhoto from '../../assets/images/mainphoto.png';

const ContactsPage = () => {
  return (
    <div className={styles['page']}>
      <h2 className={styles['dancing-script']}>Contacts</h2>
      <p className={styles['pages-content']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non
        laborum impedit, dicta porro recusandae incidunt fugit minima pariatur
        dignissimos et explicabo necessitatibus totam repellendus, soluta
        corrupti accusantium vero? Quibusdam repellat architecto maiores,
        necessitatibus perferendis nostrum atque.
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
