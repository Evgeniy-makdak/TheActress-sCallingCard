import { useState } from 'react';
import styles from './styles/VideoPage.module.css';
import VideoIcon from '../VideoIcon';
import video1 from '../../assets/videos/Tsvetaeva.mp4';
import mainPhoto from '../../assets/images/mainphoto.png';
// import video2 from '../videos/your_video.mp4'; // Добавьте пути к видео
// import video3 from '../videos/your_video.mp4'; // Добавьте пути к видео
// import video4 from '../videos/your_video.mp4'; // Добавьте пути к видео
// import video5 from '../videos/your_video.mp4'; // Добавьте пути к видео

const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    { src: video1, title: 'Конкурс чтецов памяти М.Цветаевой' },
    //   { src: video2, title: 'Video 2' },
    //   { src: video3, title: 'Video 3' },
    //   { src: video4, title: 'Video 4' },
    //   { src: video5, title: 'Video 5' },
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
            <video controls autoPlay>
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      <img
        src={mainPhoto}
        alt="Main photo by Victoria"
        className={styles.image}
      />
    </div>
  );
};

export default VideoPage;
