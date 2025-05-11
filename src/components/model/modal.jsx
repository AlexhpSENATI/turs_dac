import { useState, useEffect } from 'react';
import TourForm from '../model/tourfrom';
import styles from '../../styles/style.css';

const Modal = ({ tour, onClose, onSubmit }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        
        <div className={styles.modalBody}>
          <div className={styles.tourImages}>
            <div className={styles.mainImageContainer}>
              <img 
                src={tour.images[currentImageIndex]} 
                alt={`Imagen de ${tour.title}`}
                className={styles.mainImage}
              />
            </div>
            <div className={styles.thumbnailContainer}>
              {tour.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  className={`${styles.thumbnail} ${currentImageIndex === index ? styles.active : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <TourForm 
              tour={tour}
              onSubmit={onSubmit}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;