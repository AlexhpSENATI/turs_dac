import { useState, useEffect } from 'react';
import styles from '../../styles/style.css';

const TourForm = ({ tour, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    fecha: '',
    adultos: 1
  });

  const discount = Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100);
  const totalPrice = tour.price * formData.adultos;

  useEffect(() => {
    // Setear fecha actual por defecto
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, fecha: formattedDate }));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.tourForm}>
      <div className={styles.formHeader}>
        <h3 className={styles.tourTitle}>{tour.title}</h3>
        <span className={styles.discountBadge}>{discount}% DESCUENTO</span>
      </div>

      <div className={styles.priceContainer}>
        <p className={styles.currentPrice}>S/{tour.price.toFixed(2)}</p>
        <p className={styles.originalPrice}>Antes: S/{tour.originalPrice.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="celular">Celular</label>
          <input
            type="tel"
            id="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="fecha">Fecha de Salida</label>
          <input
            type="date"
            id="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="adultos">Adultos</label>
          <input
            type="number"
            id="adultos"
            min="1"
            value={formData.adultos}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.priceSummary}>
          <p>Total: <strong>S/{totalPrice.toFixed(2)}</strong></p>
          <p>(S/{tour.price.toFixed(2)} x {formData.adultos} personas)</p>
        </div>

        <button type="submit" className={styles.submitButton}>
          Reservar Ahora
        </button>
      </form>
    </div>
  );
};

export default TourForm;