import styles from "./styles/VideoPage.module.css";
import mainPhoto from "../../assets/images/mainphoto.png";
import thumbnailQueenOfSpades from "../../assets/images/TheQueenOfSpades.jpg";
import thumbnailPrayer from "../../assets/images/Prayer.png";
import thumbnailLittleWitch from "../../assets/images/TheLittleWitch.png";
import { useLanguage, translations } from "../../context/LanguageContext";

const VideoPage = () => {
  const { language } = useLanguage();
  const t = translations[language].videoPage;
  const videos = [
    {
      src: "yzuiKpUkAjA",
      title: t.queenOfSpades,
      thumbnail: thumbnailQueenOfSpades,
    },
    {
      src: "amyG_FqsvQE",
      title: t.prayer,
      thumbnail: thumbnailPrayer,
    },
    {
      src: "2jkXkHB8DbA",
      title: t.littleWitch,
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
                <div className={styles.videoLink}>{t.watch}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={mainPhoto} alt={translations[language].alt} className={styles.image} />
    </div>
  );
};

export default VideoPage;
