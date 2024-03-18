import {useState} from 'react';
import styles from './Pages.module.css';
import VideoIcon from './VideoIcon';
import video1 from '../videos/Tsvetaeva.mp4';
// import video2 from '../videos/your_video.mp4'; // Добавьте пути к вашим видео

const VideoPage = () => {
    const [currentVideo, setCurrentVideo] = useState(null);
  
    const videos = [
      { src: video1, title: 'Конкурс чтецов памяти М.Цветаевой' },
    //   { src: video2, title: 'Video 2' },
      // Добавьте другие видео при необходимости
    ];
  
    const handleVideoClick = (src) => {
      setCurrentVideo(src);
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <VideoIcon key={index} src={video.src} title={video.title} onClick={handleVideoClick} />
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
    );
  };
  
  export default VideoPage;