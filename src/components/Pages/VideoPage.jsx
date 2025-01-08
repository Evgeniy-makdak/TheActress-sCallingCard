import { useState } from 'react';
import styles from './styles/VideoPage.module.css';
import mainPhoto from '../../assets/images/mainphoto-min.png';

const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    { src: 'yzuiKpUkAjA', title: 'Пиковая дама' },
    { src: 'amyG_FqsvQE', title: '"Молитва" М.Цветаева' },
    { src: '2jkXkHB8DbA', title: '"Маленькая ведьма" по мотивам О.Пройслера "Маленькая волшебница"' },
    // Добавьте другие видео в этот массив по аналогии
  ];

  const handleVideoClick = (id) => {
    setCurrentVideo(id);
  };

  const handleWatchClick = (id) => {
    window.open(`https://youtu.be/${id}`, '_blank');
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
                onClick={() => handleVideoClick(video.src)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.src}/0.jpg`}
                  alt=""
                />
                <div className={styles.videoTitle}>{video.title}</div>
                <div
                  className={styles.videoLink}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWatchClick(video.src);
                  }}
                >
                  Смотреть
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentVideo && (
          <div className={styles.videoPlayer}>
            <iframe
              title="YouTube Video"
              src={`https://www.youtube.com/embed/${currentVideo}`}
              style={{ border: 'none' }}
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
        )}
      </div>
      <img src={mainPhoto} alt="" className={styles.image} />
    </div>
  );
};

export default VideoPage;
