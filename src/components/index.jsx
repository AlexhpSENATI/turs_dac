import React, { useState } from "react";
import SecHero from "../components/sec_hero.jsx";
import Footer from "../components/sec_footer.jsx";

import '../styles/style.css';

// IMAGENES DE LOS CARD DE LAS 3  PROVINCIAS 

import pasco from '../assets/card/pasco.png';
import yanahuanca from '../assets/card/yanahuanca.png';
import oxapampa from '../assets/card/oxa.png';

const InteractiveCards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Cerro de Pasco",
      description: "Ciudad Real de Minas",
      image: pasco,
      rating: 4,
      hover: false,
    },
    {
      id: 2,
      title: "Yanahuanca",
      description: "Piedra Negra",
      image:yanahuanca ,
      rating: 5,
      hover: false,
    },
    {
      id: 3,
      title: "Oxapampa",
      description: "Tierra de Colonos",
      image: oxapampa,
      rating: 3,
      hover: false,
    },
  ]);

  const rateCard = (cardId, newRating) => {
    setCards(cards.map(card => 
      card.id === cardId ? { ...card, rating: newRating } : card
    ));
  };

  const toggleHover = (cardId) => {
    setCards(cards.map(card =>
      card.id === cardId ? { ...card, hover: !card.hover } : card
    ));
  };

  return (
    <div className="card-container">
      {cards.map(card => (
        <div
          key={card.id}
          className={`card ${card.hover ? 'hover' : ''}`}
          onMouseEnter={() => toggleHover(card.id)}
          onMouseLeave={() => toggleHover(card.id)}
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
                onClick={() => rateCard(card.id, star)}
              >
                {star <= card.rating ? '★' : '☆'}
              </span>
            ))}
          </div>
          <button className="card-button">Más información</button>
        </div>
      ))}
    </div>
  );
};

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
