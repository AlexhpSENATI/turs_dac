import React, { useState } from "react";
import SecHero from "../components/sec_hero.jsx";
import Footer from "../components/sec_footer.jsx";

import '../styles/style.css';
// LOS ICONS XD 

import { WiDaySunny } from 'react-icons/wi';
import { FaUser } from 'react-icons/fa';
import { FaMountain } from 'react-icons/fa';

//  PROMOCIONES DE VISITAS  LOCAL
import Huarautambo from '../assets/card/collage01.png'
import Ichugan from '../assets/card/ichugan.png'
import Goñicutac from '../assets/card/goñicutac.png'



// COLLAGE DE FORMULARIOS
import foto01 from '../assets/card/collage03.png'
import foto02 from '../assets/card/foto02.png'
import foto03 from '../assets/card/foto03.png'
import foto04 from '../assets/card/collage04.png'
import foto05 from '../assets/card/foto05.png'
import foto06 from '../assets/card/foto06.png'
import foto07 from '../assets/card/foto07.png'
import foto08 from '../assets/card/foto08.png'


// CARDAS
import pasco from '../assets/card/pasco.png';
import yanahuanca from '../assets/card/yanahuanca.png';
import oxapampa from '../assets/card/oxa.png';

// COLLAGE 
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
      {/* CARD DE FORMULARIOS DE VISITAS */}
      <div className="yanahuanca">
        <div className="yanahuanca-header">
          <h1 className="yanahuanca-title">YANAHUANCA</h1>
          <div className="yanahuanca-discount">21% DESCUENTO</div>
        </div>

        <div className="yanahuanca-main">
          <div className="yanahuanca-images">
            <div className="yanahuanca-programa">
              <div className="yanahuanca-item">
                <i className="fas fa-map-marked-alt"></i>
                <span>Tour especial</span>
              </div>
              <div className="yanahuanca-item">
                <i className="far fa-clock"></i>
                <span>24/7</span>
              </div>
              <div className="yanahuanca-item">
                <i className="far fa-calendar-alt"></i>
                <span>08 May 2025</span>
              </div>
              <div className="yanahuanca-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Huánuco</span>
              </div>
              <div className="yanahuanca-item">
                <i className="fas fa-user-tie"></i>
                <span>Guía: ToursHP</span>
              </div>
            </div>

            <div className="yanahuanca-collage">
              <img src={foto01} alt="Yanahuanca 1" className="yanahuanca-img yanahuanca-large" />
              <img src={foto02} alt="Yanahuanca 2" className="yanahuanca-img" />
              <img src={foto03} alt="Yanahuanca 3" className="yanahuanca-img" />
              <img src={foto05} alt="Yanahuanca 1" className="yanahuanca-img yanahuanca-large" />
              {/* <img src={foto04} alt="Yanahuanca 4" className="yanahuanca-img" />
              <img src={foto05} alt="Yanahuanca 5" className="yanahuanca-img" /> */}
              <img src={foto06} alt="Yanahuanca 6" className="yanahuanca-img" />
              <img src={foto07} alt="Yanahuanca 7" className="yanahuanca-img" />
              <img src={foto08} alt="Yanahuanca 7" className="yanahuanca-img" />
            </div>
          </div>

          <div className="yanahuanca-form">
            <div className="yanahuanca-price">
              <div className="price-current">S/197.50</div>
              <div className="price-original">Desde $250.00/persona</div>
            </div>

            <div className="form-group">
              <label htmlFor="nombre">NOMBRE</label>
              <input type="text" id="nombre" placeholder="Ingrese su nombre" />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">APELLIDO</label>
              <input type="text" id="apellido" placeholder="Ingrese su apellido" />
            </div>

            <div className="form-group">
              <label htmlFor="celular">CELULAR</label>
              <input type="tel" id="celular" placeholder="Ingrese su celular" />
            </div>

            <div className="form-group">
              <label htmlFor="fecha">FECHA DE SALIDA</label>
              <input type="date" id="fecha" placeholder="yyyy-mm-dd" />
            </div>

            <div className="form-group">
              <label htmlFor="adultos">ADULTOS</label>
              <input type="number" id="adultos" defaultValue="1" min="1" />
            </div>

            <div className="yanahuanca-summary">
              $/197.50 = $/197.50
            </div>

            <button className="yanahuanca-btn">RESERVA AHORA</button>
            <div className="yanahuanca-method">Online</div>
          </div>
        </div>
      </div>

      {/* INFO DE YANAHUANCA COLLAGE */}
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

      {/* PROMOCIONES DE VISITAS  LOCAL */}
      <div className="promocion-dac">
        <div className="container">
          <header>
            <h1>Descubre los Mejores Destinos</h1>
            <p className="subtitle">RECOMENDACION POR TIEMPO DE INVIERNO</p>
          </header>

          <div className="tours-grid">
            {/* Huarautambo */}
            <div className="tour-card">
              <div className="tour-badge">
                <div className="tour-duracion">2 Dias</div>
              </div>
              <img
                src={Huarautambo}
                alt="Huarautambo"
                className="tour-image"
              />
              <div className="tour-content">
                <h2 className="tour-title">Huarautambo</h2>
                <p className="tour-description">
                  Se cuenta que en este lugar existió un asentamiento del Reino de los Yaro,
                  que en su momento abarcó gran parte del lado occidental del departamento
                  de Pasco y que fueron conquistados por los incas durante el gobierno de
                  Pachacútec.
                </p>
                <a href="#" className="more-info">Más informes</a>
              </div>
            </div>

            {/* Ichugan */}
            <div className="tour-card">
              <div className="tour-badge">
                <div className="tour-duracion">2 Días</div>
              </div>
              <img
                src={Ichugan}
                alt="Ichugan"
                className="tour-image"
              />
              <div className="tour-content">
                <h2 className="tour-title">Ichugan</h2>
                <p className="tour-description">
                  Tiene templos, chullpas, unidades domésticas, hornos de construcción de cerámicos,
                  primer mirador principal adherido como una especie de intihuatana, plazuelas
                  y unidades domésticas ruinosas, como también aymuray  y/o tambo
                  (lugar de descanso, enseñanza y relajo).
                </p>
                <a href="#" className="more-info">Más informes</a>
              </div>
            </div>

            {/* Goñicutac */}
            <div className="tour-card">
              <div className="tour-badge">
                <div className="tour-duracion">1 Dia</div>
              </div>
              <img
                src={Goñicutac}
                alt="Goñicutac"
                className="tour-image"
              />
              <div className="tour-content">
                <h2 className="tour-title">Goñicutac</h2>
                <p className="tour-description">
                  Este lugar es un legado de los Yaros, una cultura que tuvo influencia de los Wari y que forma parte de
                  la historia del departamento de Pasco. La ciudadela parece haber sido construida en el siglo XIII según
                  los investigadores.
                </p>
                <br></br>
                <a href="#" className="more-info">Más informes</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TITULO */}
      <div className="tituloprincipal">
        <h1 className="titulo">REGION DE PASCO</h1>
        <h3 className="provincia">NUESTRAS 3 PROVINCIAS</h3>
      </div>

      {/* CARD DE INFO DE LAS PROVINCIAS */}
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
