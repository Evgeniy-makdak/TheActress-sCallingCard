import styles from './VideoIcon.module.css';

const VideoIcon = ({ src, title, onClick }) => {
  const handleClick = () => {
    onClick(src);
  };

  return (
    <div className={styles.videoIcon} onClick={handleClick}>
      <img src={src} alt={title} className={styles.icon} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default VideoIcon;