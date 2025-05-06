import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

import "../styles/sec_hero.css";
import { FaUser, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import fondo1 from '../assets/fondo1.png';
import fondo2 from '../assets/fondo2.png';
import fondo3 from '../assets/fondo3.png';

const SecHero = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const slides = [
        {
            image: fondo1,
            title: "Descubre paisajes increíbles",
            subtitle: "Explora los destinos más impresionantes del mundo"
        },
        {
            image: fondo2,
            title: "Aventuras inolvidables",
            subtitle: "Vive experiencias únicas en cada viaje"
        },
        {
            image: fondo3,
            title: "Lugares paradisíacos",
            subtitle: "Encuentra tu próximo destino soñado"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 10);

            if (currentScrollY > 10) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scroll hacia abajo - ocultar solo partes del navbar
                    setIsNavbarVisible(false);
                } else if (currentScrollY < lastScrollY) {
                    // Scroll hacia arriba - mostrar todo
                    setIsNavbarVisible(true);
                }
            } else {
                // En el top - siempre visible
                setIsNavbarVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        if (carouselRef.current) {
            carouselRef.current.style.transition = "transform 0.5s ease-in-out";
        }
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
        if (carouselRef.current) {
            carouselRef.current.style.transition = "transform 0.5s ease-in-out";
        }
    };

    return (
        <section className="hero-section">
            {/* Carrusel de imágenes */}
            <div className="carousel-container" ref={carouselRef}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        aria-hidden={index !== currentSlide}
                    >
                        <div className="image-overlay"></div>
                    </div>
                ))}
            </div>

            {/* Controles del carrusel */}
            <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous slide">
                <FaChevronLeft size={24} />
            </button>
            <button className="carousel-control next" onClick={nextSlide} aria-label="Next slide">
                <FaChevronRight size={24} />
            </button>

            {/* Indicadores del carrusel */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir a slide ${index + 1}`}
                        onMouseEnter={() => goToSlide(index)}
                    >
                        <span className="progress-bar"></span>
                    </button>
                ))}
            </div>

            {/* Navbar */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className={`navbar-left ${isNavbarVisible ? '' : 'hidden'}`}>
                        <a className="logo" href="#">
                            Turismo<span className="logo-highlight">HP</span>
                        </a>
                    </div>

                    <div className="navbar-center">
                        <Link to="/" className="nav-link">Inicio</Link>
                        <Link to="/nosotros" className="nav-link">Nosotros</Link>
                        <Link to="/destinos" className="nav-link">Destinos</Link>
                        <Link to="/promociones" className="nav-link">Promociones</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>
                        <Link to="/contacto" className="nav-link">Contacto</Link>
                    </div>

                    <div className={`navbar-right ${isNavbarVisible ? '' : 'hidden'}`}>
                        <button className="login-btn">
                            <FaUser size={16} />
                            <span>Iniciar sesión</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Contenido principal */}
            <div className="hero-content">
                <div className="text-content">
                    <p className="intro-text">{slides[currentSlide].subtitle}</p>
                    <h1 className="main-title">
                        {slides[currentSlide].title.split(" ").map((word, i) => (
                            <span key={i} className="title-word" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                                {word}&nbsp;
                            </span>
                        ))}
                    </h1>

                    <div className="button-group">
                        <button
                            className="primary-btn"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="btn-content">
                                {isHovered ? '¡Empezar ahora!' : 'Descubrir más'}
                            </span>
                            <span className="btn-gradient"></span>
                        </button>

                        <button className="secondary-btn">
                            <span>Ver promociones</span>
                        </button>

                        <button className="video-btn">
                            <FaPlay size={14} />
                            <span>Ver tour</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Indicador de scroll */}
            <div className="scroll-down">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Desplázate para explorar</p>
            </div>
        </section>
    );
};

export default SecHero;