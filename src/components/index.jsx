import React, { useState } from "react";
import SecHero from "../components/sec_hero.jsx";
import Footer from "../components/sec_footer.jsx";

import '../styles/style.css';
// LOS ICONS XD 

import { WiDaySunny } from 'react-icons/wi';
import { FaUser } from 'react-icons/fa';
import { FaMountain } from 'react-icons/fa';




import pasco from '../assets/card/pasco.png';
import yanahuanca from '../assets/card/yanahuanca.png';
import oxapampa from '../assets/card/oxa.png';


import collage01 from '../assets/card/collage01.png'
import collage02 from '../assets/card/collage02.png'
import collage03 from '../assets/card/collage03.png'
import collage04 from '../assets/card/collage04.png'

// IMAGENES DEL COLLAGE 
const images = [
  {
    id: 1,
    src: collage01,
    alt: "Imagen 1 - Naturaleza"
  },
  {
    id: 2,
    src: collage02,
    alt: "Imagen 2 - Ciudad"
  },
  {
    id: 3,
    src: collage03,
    alt: "Imagen 3 - Playa"
  },
  {
    id: 4,
    src: collage04,  // ¡URL nueva y única!
    alt: "Imagen 4 - Montañas"
  }
];

// INFOR DEL CARD DE CADA PROVINCIA
const InteractiveCards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Cerro de Pasco",
      description: "Ciudad Real de Minas",
      image: pasco,
      rating: 4,
      hover: false,
      color: "#4a6fa5",
      weather: "Frío",
      visitantes: "15k/año",
      altitude: "4,330 msnm"
    },
    {
      id: 2,
      title: "Yanahuanca",
      description: "Piedra Negra",
      image: yanahuanca,
      rating: 5,
      hover: false,
      color: "#5a8f6b",
      weather: "Templado",
      visitantes: "8k/año",
      altitude: "3,200 msnm"
    },
    {
      id: 3,
      title: "Oxapampa",
      description: "Tierra de Colonos",
      image: oxapampa,
      rating: 3,
      hover: false,
      color: "#9d6c82",
      weather: "Cálido",
      visitantes: "20k/año",
      altitude: "1,814 msnm"
    },
  ]);

  const rateCard = (cardId, star) => {
    setCards(prevCards =>
      prevCards.map(card =>
        card.id === cardId
          ? { ...card, rating: card.rating === star ? 0 : star }
          : card
      )
    );
  };

  const toggleHover = (cardId) => {
    setCards(prevCards =>
      prevCards.map(card =>
        card.id === cardId ? { ...card, hover: !card.hover } : card
      )
    );
  };

  return (
    <>
      <div className="tituloprincipal">
        <h1 className="titulo">DANIEL ALCIDES CARRION</h1>
        <h3 className="provincia">PROVINCIA</h3>
      </div>
      <div className="card-container">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card.hover ? 'hover' : ''}`}
            onMouseEnter={() => toggleHover(card.id)}
            onMouseLeave={() => toggleHover(card.id)}
            style={{ backgroundColor: card.color }}
          >
            <div className="circle-image">
              <img src={card.image} alt={card.title} />
            </div>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  className={`star ${star <= card.rating ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    rateCard(card.id, star);
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="card-details">
              <div className="detail-item">
                <WiDaySunny className="icon" />
                <span className="label">Clima:</span>
                <span className="value">{card.weather || "Templado"}</span>
              </div>
              <div className="detail-item">
                <FaUser className="icon" />
                <span className="label">Visitantes:</span>
                <span className="value">{card.visitantes || "10k/año"}</span>
              </div>
              <div className="detail-item">
                <FaMountain className="icon" />
                <span className="label">Altitud:</span>
                <span className="value">{card.altitude || "4,330 msnm"}</span>
              </div>
            </div>

            <button className="card-button">Más información</button>
          </div>
        ))}
      </div>

      <div className="collage-undac-contenedor">
        <div className="collage-undac">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`collage-undac-img collage-undac-img-${image.id}`}
              onError={(e) => {
                e.target.style.display = 'none'; // Oculta imágenes rotas
                console.error(`Error al cargar la imagen ${image.id}: ${image.src}`);
              }}
            />
          ))}
        </div>

        {/* Contenido derecho */}
        <div className="collage-undac-contenido">
          <h1>PROVINCIA YANAHUANCA</h1>
          <p>La provincia de Yanahuanca, en Pasco, resalta por sus paisajes andinos y su herencia cultural.
            Destacan el sitio arqueológico de Huarautambo, las aguas termales de Villo y Rabí, y el puente colonial de piedra.
            Sus fiestas tradicionales, como San Juan y Semana Santa, reflejan la alegría de su gente.
          </p>
          <button className="collage-undac-boton">Ver Galería</button>
        </div>
      </div>

    </>
  );
}

function Inicio() {
  return (
    <>
      <SecHero />
      <InteractiveCards />
      <Footer />
    </>
  );
}

export default Inicio;
