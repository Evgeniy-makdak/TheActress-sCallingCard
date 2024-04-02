import { useState } from 'react';
import styles from './styles/VideoPage.module.css';
import mainPhoto from '../../assets/images/mainphoto.png';

const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    { src: 'https://youtu.be/yzuiKpUkAjA', title: 'Пиковая дама' },
    { src: 'https://youtu.be/yzuiKpUkAjA', title: 'Пиковая дама' },
    { src: 'https://youtu.be/yzuiKpUkAjA', title: 'Пиковая дама' },
    { src: 'https://youtu.be/yzuiKpUkAjA', title: 'Пиковая дама' },
    // Добавьте другие видео в этот массив по аналогии
  ];

  const handleVideoClick = (src) => {
    setCurrentVideo(src);
  };

  const handleWatchClick = (src) => {
    window.open(src, '_blank');
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={styles.videoCard}
              onClick={() => handleVideoClick(video.src)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.src
                  .split('/')
                  .pop()}/0.jpg`}
                alt={video.title}
              />
              <div className={styles.videoTitle}>{video.title}</div>
              <div className={styles.videoLink} onClick={() => handleWatchClick(video.src)}>Смотреть</div>
            </div>
          ))}
        </div>
        {currentVideo && (
          <div className={styles.videoPlayer}>
            {typeof currentVideo === 'string' ? (
              <iframe
                title="YouTube Video"
                src={currentVideo}
                style={{ border: 'none' }}
                allowFullScreen
                width="100%"
                height="100%"
              ></iframe>
            ) : (
              <video controls autoPlay width="100%">
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
      <img src={mainPhoto} alt="Main photo" className={styles.image} />
    </div>
  );
};

export default VideoPage;
