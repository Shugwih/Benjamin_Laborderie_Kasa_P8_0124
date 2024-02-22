import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Slideshow.module.scss';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const previous = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const next = () => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  const multipleImages = images.length > 1;

  return (
    <div className={styles.slideshow}>
      {multipleImages && (
        <>
          <button onClick={previous} className={styles.navButton}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={next} className={styles.navButton}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      {images.length > 0 && (
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.slideImage} />
      )}
      {multipleImages && (
        <div className={styles.slideNumber}>
          {`${currentIndex + 1}/${images.length}`}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
