// src/components/Preloader.jsx
import React from 'react';
import '../styles/preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src="./gifautoload.gif" alt="Cargando..." />
    </div>
  );
};

export default Preloader;
