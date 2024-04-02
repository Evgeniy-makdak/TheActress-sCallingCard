import { useState } from 'react';
import styles from './styles/VideoPage.module.css';
import VideoIcon from '../VideoIcon';
import mainPhoto from '../../assets/images/mainphoto.png';

const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    { src: 'https://youtu.be/yzuiKpUkAjA', title: 'Пиковая дама' },
    {
      src: require('../../assets/videos/Tsvetaeva.mp4'),
      title: 'Конкурс чтецов памяти М.Цветаевой',
    },
  ];

  const handleVideoClick = (src) => {
    setCurrentVideo(src);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <VideoIcon
              key={index}
              src={video.src}
              title={video.title}
              onClick={handleVideoClick}
            />
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
