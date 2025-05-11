import styles from '../../styles/style.css';

const Card = ({ tour, onOpenModal }) => {
  const discount = Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100);

  return (
    <article className={styles.card} onClick={() => onOpenModal(tour)}>
      <div className={styles.imageContainer}>
        <img 
          src={tour.images[0]} 
          alt={tour.title} 
          className={styles.image}
          loading="lazy"
        />
        {discount > 0 && (
          <span className={styles.discountBadge}>{discount}% OFF</span>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{tour.title}</h3>
        <p className={styles.description}>{tour.description}</p>
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>S/{tour.price.toFixed(2)}</span>
          {tour.originalPrice > tour.price && (
            <span className={styles.originalPrice}>S/{tour.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button className={styles.button} onClick={(e) => {
          e.stopPropagation();
          onOpenModal(tour);
        }}>
          Más información
        </button>
      </div>
    </article>
  );
};

export default Card;