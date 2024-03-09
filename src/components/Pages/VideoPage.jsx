import styles from './Pages.module.css';
import video from '../videos/Tsvetaeva.mp4';

const VideoPage = () => {
    return (
        <div className={styles.container}>
            <video className={styles.video} controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPage;