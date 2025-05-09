import React, { useRef, useEffect, useState } from 'react';

import '../styles/style.css';

import SecHero from "../components/sec_hero.jsx";
import Footer from "../components/sec_footer.jsx";

// IMPORTACION DE IMAGENES 

// IMAGENES DE CARRUSEL
import Carrusel01 from '../assets/carruselProm/carrusel01.png'
import Carrusel02 from '../assets/carruselProm/carrusel02.png'
import Carrusel03 from '../assets/carruselProm/carrusel03.png'
import Carrusel04 from '../assets/carruselProm/carrusel04.png'
import Carrusel05 from '../assets/carruselProm/carrusel05.png'
import Carrusel06 from '../assets/carruselProm/carrusel06.png'

// IMAGENES DE RECOMENDACION PROMOCION
import Huarautambo from '../assets/card/collage01.png'
import Ichugan from '../assets/card/ichugan.png'
import Goñicutac from '../assets/card/goñicutac.png'
import Pychuycocha from '../assets/carruselProm/pychuycocha.png'
import PuenteCol from '../assets/carruselProm/puenteC.png'
import MolinoH from '../assets/carruselProm/molinoH.png'


const Pagpromo = () => {

  const trackRef = useRef(null);
  const slidesPerView = 3;
  const [current, setCurrent] = useState(0);
  const dots = [0, 1];

  const moveToSlide = (index) => {
    const track = trackRef.current;
    const slideWidth = track.children[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * slidesPerView * index}px)`;
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % dots.length;
        moveToSlide(next);
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    moveToSlide(current);
  }, [current]);

  return (
    <>
      {/* TITULO */}
      <div className="tituloprincipal">
        <h1 className="titulo">VIAJE DE PROMOCION ESCOLAR</h1>
        <h3 className="provincia">GALERIA</h3>
      </div>

      {/* CARRUSEL DE PROMOCIONES */}
      <div className='carruseldac'>
        <div className="carruseldac-prom-carousel">
          <div className="carruseldac-prom-track" ref={trackRef}>
            <div className="carruseldac-prom-slide"><img src={Carrusel01} alt="img1" /></div>
            <div className="carruseldac-prom-slide"><img src={Carrusel02} alt="img2" /></div>
            <div className="carruseldac-prom-slide"><img src={Carrusel03} alt="img3" /></div>
            <div className="carruseldac-prom-slide"><img src={Carrusel04} alt="img4" /></div>
            <div className="carruseldac-prom-slide"><img src={Carrusel05} alt="img5" /></div>
            <div className="carruseldac-prom-slide"><img src={Carrusel06} alt="img6" /></div>
          </div>
          <div className="carruseldac-prom-indicators">
            {dots.map((_, idx) => (
              <span
                key={idx}
                className={`carruseldac-prom-dot ${current === idx ? 'active' : ''}`}
                onClick={() => moveToSlide(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* PROMOCIONES DE VISITAS  LOCAL */}
      <div className="promocion-dac">
        <div className="container">
          <header>
            <h1>Descubre los Mejores Destinos de Nuestra Provincia</h1>
            <p className="subtitle">RECOMENDACION ESCOLAR</p>
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

            {/* Pychuycocha */}
            <div className="tour-card">
              <div className="tour-badge">
                <div className="tour-duracion">3 Dias</div>
              </div>
              <img
                src={Pychuycocha}
                alt="Pychuycocha"
                className="tour-image"
              />
              <div className="tour-content">
                <h2 className="tour-title">Pychuycocha</h2>
                <p className="tour-description">
                  El Nevado de Pichuycocha es una imponente montaña ubicada en la provincia de Daniel Alcides Carrión, en el 
                  departamento de Pasco, Perú. Forma parte de la Cordillera de los Andes y se encuentra en una zona de gran 
                  riqueza natural y cultural, cercana al recién creado distrito de Chinche.
                </p>
                <br></br>
                <a href="#" className="more-info">Más informes</a>
              </div>
            </div>

            {/* PuenteCol */}
            <div className="tour-card">
              <div className="tour-badge">
                <div className="tour-duracion">1 Dia</div>
              </div>
              <img
                src={PuenteCol}
                alt="PuenteCol"
                className="tour-image"
              />
              <div className="tour-content">
                <h2 className="tour-title">Puente Quichque</h2>
                <p className="tour-description">
                  El Puente Quichque es una emblemática estructura de piedra ubicada en el distrito de Yanahuanca, en la provincia
                  de Daniel Alcides Carrión, región Pasco, Perú. Construido en 1934, este puente de calicanto destaca por su arquitectura 
                  robusta y su conservación, a pesar del paso del tiempo. 
                </p>
                <br></br>
                <a href="#" className="more-info">Más informes</a>
              </div>
            </div>

            {/* MolinoH */}
            <div className="tour-card">
              <div className="tour-badge">
                <div className="tour-duracion">2 Dias</div>
              </div>
              <img
                src={MolinoH}
                alt="MolinoH"
                className="tour-image"
              />
              <div className="tour-content">
                <h2 className="tour-title">Molino Huarautambo</h2>
                <p className="tour-description">
                  El Molino Colonial de Huarautambo es una antigua estructura hidráulica ubicada en el distrito de Yanahuanca, 
                  Construido durante la época colonial, este molino utilizaba la fuerza del agua para moler granos como maíz y trigo, mediante 
                  un ingenioso sistema de ruedas y piedras de molienda.
                </p>
                <br></br>
                <a href="#" className="more-info">Más informes</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};






function Nosotros() {
  return (
    <>
      <SecHero />
      <Pagpromo />
      <Footer />
    </>
  );
}
export default Nosotros;