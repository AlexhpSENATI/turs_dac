import React, { useState } from 'react';
import '../styles/style.css';

import SecHero from "../components/sec_hero.jsx";
import Footer from "../components/sec_footer.jsx";
// import TourPackages from "../components/tourPackages.jsx";


import Logo from "../assets/logo.png"



// GALERIA NOSOTROS 
const ImagenesNos = [
  './img/nosotrosfotos/fotoN01.png',
  './img/nosotrosfotos/fotoN02.png',
  './img/nosotrosfotos/fotoN03.png',
  './img/nosotrosfotos/fotoN04.png',
  './img/nosotrosfotos/fotoN05.png',
  './img/nosotrosfotos/fotoN06.png',
  './img/nosotrosfotos/fotoN07.png',
  './img/nosotrosfotos/fotoN08.png'
];


const Pagnosotros = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className='info-nosotros'>
        <div className="info-nosotros-pagina">
          <div className="info-nosotros-inf">
            <div className="info-nosotros-text-section">
              <div className="info-nosotros-highlight"></div>
              <h1>
                SOMOS HUELLA<br />
                PATRIMONIAL HP
              </h1>
              <p>
                Somos una agencia de turismo que diseña, promueve nuevas y realiza
                paquetes turísticos responsables en Perú.
              </p>
              <p>
                Planificamos cada viaje de acuerdo con el presupuesto y las
                necesidades de cada cliente.
              </p>
              <p>
                <strong>
                  Trabajamos todos los días para asegurarnos de traer beneficios
                  sociales, económicos y ambientales a todas las comunidades en
                  todos los destinos.
                </strong>
              </p>
              <p>
                Lo que nos diferencia es nuestra cercanía con nuestros clientes.
              </p>
            </div>
            <div className="info-nosotros-logo">
              <img src={Logo} alt="LOGO HP" />
            </div>
          </div>
        </div>
      </div>

      <div className="nosotros-foto-container">
        <div className="nosotros-foto-linea-decorativa"></div>
        <h1 className="nosotros-foto-title">GALERÍA DE FOTOS</h1>
        <div className="nosotros-foto-galeria">

          {ImagenesNos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Foto ${index + 1}`}
              className="nosotros-foto-img"
              onClick={() => openModal(src)}
            />
          ))}
        </div>

        {modalImage && (
          <div className="nosotros-foto-modal" onClick={closeModal}>
            <span className="nosotros-foto-close" onClick={closeModal}>&times;</span>
            <div className="nosotros-foto-modal-content">
              <img src={modalImage} alt="Vista ampliada" />
            </div>
          </div>
        )}
      </div>

      {/* Sección de paquetes turísticos */}


    </>
  );
};

function Nosotros() {
  return (
    <>
      < SecHero />
      <Pagnosotros />
      {/* <TourPackages /> */}
      <Footer />
    </>

  )
}
export default Nosotros;
