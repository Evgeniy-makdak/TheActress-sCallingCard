import styles from "./styles/VideoPage.module.css";
import mainPhoto from "../../assets/images/mainphoto.png";
import thumbnailQueenOfSpades from "../../assets/images/TheQueenOfSpades.jpg";
import thumbnailPrayer from "../../assets/images/Prayer.png";
import thumbnailLittleWitch from "../../assets/images/TheLittleWitch.png";

const VideoPage = () => {
  const videos = [
    {
      src: "yzuiKpUkAjA",
      title: "Пиковая дама",
      thumbnail: thumbnailQueenOfSpades,
    },
    {
      src: "amyG_FqsvQE",
      title: '"Молитва" М.Цветаева',
      thumbnail: thumbnailPrayer,
    },
    {
      src: "2jkXkHB8DbA",
      title: '"Маленькая ведьма" по мотивам О.Пройслера "Маленькая волшебница"',
      thumbnail: thumbnailLittleWitch,
      thumbnailClass: "thumbnailLittleWitch",
    },
  ];

  const openInNewWindow = (id) => {
    window.open(`https://youtu.be/${id}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.videoGridContainer}>
          <div className={styles.videoGrid}>
            {videos.map((video, index) => (
              <div
                key={index}
                className={styles.videoCard}
                onClick={() => openInNewWindow(video.src)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={video.thumbnailClass ? styles[video.thumbnailClass] : undefined}
                />
                <div className={styles.videoTitle}>{video.title}</div>
                <div className={styles.videoLink}>Смотреть</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={mainPhoto} alt="" className={styles.image} />
    </div>
  );
};

export default VideoPage;
