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
        <h1 className="titulo">REGION DE PASCO</h1>
        <h3 className="provincia">NUESTRAS 3 PROVINCIAS</h3>
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