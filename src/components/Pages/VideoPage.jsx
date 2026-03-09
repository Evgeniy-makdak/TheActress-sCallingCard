import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles/VideoPage.module.css";
import videoPageImage from "../../assets/images/videoPage.jpg";
import thumbnailQueenOfSpades from "../../assets/images/TheQueenOfSpades.jpg";
import thumbnailPrayer from "../../assets/images/Prayer.png";
import thumbnailLittleWitch from "../../assets/images/TheLittleWitch.png";
import { useLanguage, translations } from "../../context/LanguageContext";

const SLIDE_HEIGHT_DESKTOP = 220;
const SLIDE_HEIGHT_TABLET = 200;
const SLIDE_HEIGHT_MOBILE = 180;
const GAP = 16;

const useSlideHeight = () => {
  const [slideHeight, setSlideHeight] = useState(SLIDE_HEIGHT_DESKTOP);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 576) setSlideHeight(SLIDE_HEIGHT_MOBILE);
      else if (w <= 768) setSlideHeight(SLIDE_HEIGHT_TABLET);
      else setSlideHeight(SLIDE_HEIGHT_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slideHeight;
};

const VideoPage = () => {
  const { language } = useLanguage();
  const t = translations[language].videoPage;
  const slideHeight = useSlideHeight();
  const wrapperRef = useRef(null);
  const dragStartY = useRef(0);
  const isDragging = useRef(false);

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

  const [selectedIndex, setSelectedIndex] = useState(
    Math.floor(videos.length / 2),
  );

  const scrollPrev = useCallback(() => {
    setSelectedIndex((i) => Math.max(0, i - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setSelectedIndex((i) => Math.min(videos.length - 1, i + 1));
  }, []);

  const handleWheel = useCallback(
    (e) => {
      if (!wrapperRef.current?.contains(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      if (e.deltaY > 0) scrollNext();
      else if (e.deltaY < 0) scrollPrev();
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    document.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });
    return () =>
      document.removeEventListener("wheel", handleWheel, { capture: true });
  }, [handleWheel]);

  const isPointerDown = useRef(false);

  const handlePointerDown = useCallback((e) => {
    dragStartY.current = e.clientY;
    isDragging.current = false;
    isPointerDown.current = true;
  }, []);

  const handlePointerUp = useCallback((e, videoSrc) => {
    isPointerDown.current = false;
    if (isDragging.current) return;
    const dy = e.clientY - dragStartY.current;
    if (Math.abs(dy) > 15) return;
    window.open(
      `https://youtu.be/${videoSrc}`,
      "_blank",
      "noopener,noreferrer",
    );
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (!isPointerDown.current) return;
      const dy = e.clientY - dragStartY.current;
      if (Math.abs(dy) > 40) {
        isDragging.current = true;
        if (dy > 0) scrollPrev();
        else scrollNext();
        dragStartY.current = e.clientY;
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    const handleGlobalPointerUp = () => {
      isPointerDown.current = false;
    };
    document.addEventListener("pointerup", handleGlobalPointerUp);
    return () =>
      document.removeEventListener("pointerup", handleGlobalPointerUp);
  }, []);

  const getSlideStyle = useCallback(
    (index) => {
      const distance = Math.abs(index - selectedIndex);
      if (distance === 0) return { opacity: 1, transform: "scale(1)" };
      if (distance === 1) return { opacity: 0.5, transform: "scale(0.92)" };
      return { opacity: 0.2, transform: "scale(0.85)" };
    },
    [selectedIndex],
  );

  const containerTransform = `translateY(calc(50% - ${selectedIndex * (slideHeight + GAP) + slideHeight / 2}px))`;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div ref={wrapperRef} className={styles.carouselWrapper}>
          <button
            type="button"
            className={styles.carouselBtn}
            onClick={scrollPrev}
            disabled={selectedIndex === 0}
            aria-label={t.prevVideo}
          >
            ▲
          </button>
          <div
            className={styles.carouselViewport}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
          >
            <div
              className={styles.carouselContainer}
              style={{ transform: containerTransform }}
            >
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={styles.carouselSlide}
                  style={{
                    ...getSlideStyle(index),
                    height: slideHeight,
                  }}
                  onPointerUp={(e) => handlePointerUp(e, video.src)}
                >
                  <div className={styles.videoCard}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className={
                        video.thumbnailClass
                          ? styles[video.thumbnailClass]
                          : undefined
                      }
                    />
                    <div className={styles.videoTitle}>{video.title}</div>
                    <div className={styles.videoLink}>{t.watch}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className={styles.carouselBtn}
            onClick={scrollNext}
            disabled={selectedIndex === videos.length - 1}
            aria-label={t.nextVideo}
          >
            ▼
          </button>
        </div>
      </div>
      <img
        src={videoPageImage}
        alt={translations[language].alt}
        className={styles.image}
      />
    </div>
  );
};

export default VideoPage;
