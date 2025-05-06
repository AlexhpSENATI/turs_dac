import React, { useState, useEffect } from 'react';


import { FaHome, FaInfoCircle, FaUsers } from 'react-icons/fa';
import { FaLocationDot, FaBell, FaEnvelope, FaFacebook, FaWhatsapp, FaInstagram, FaYoutube, FaHeart, FaArrowUp,FaTiktok } from 'react-icons/fa6';


// import { FiMail } from 'react-icons/fi';
import '../styles/sec_footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Efecto para animación de aparición
    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    // Efecto para mostrar el botón de scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const socialLinks = [
        { icon: <FaFacebook />, name: 'Facebook', url: '#', color: '#3b5998' },
        { icon: <FaWhatsapp />, name: 'WhatsApp', url: '#', color: '#25D366' },
        { icon: <FaInstagram />, name: 'Instagram', url: '#', color: '#e1306c' },
        { icon: <FaYoutube />, name: 'YouTube', url: '#', color: '#FF0000' },
        { icon: <FaTiktok />, name: 'TikTok', url: '#', color: '#000000' }

    ];

    const quickLinks = [
        { name: 'Inicio', url: '#', icon: <FaHome /> },
        { name: 'Nosotros', url: '#', icon: <FaUsers /> },
        { name: 'Destino', url: '#', icon: <FaLocationDot /> },
        { name: 'Promociones', url: '#', icon: <FaBell /> },
        { name: 'Blog', url: '#', icon: <FaInfoCircle /> },
        { name: 'Contacto', url: '#', icon: <FaEnvelope /> },

    ];

    return (
        <footer className={`footer-container ${isVisible ? 'visible' : ''}`}>
            <div className="footer-content">
                <div className="footer-section subscribe-section">
                    <h3>
                        Suscríbete 
                    </h3>
                    <p className="newsletter-text">¡Bienvenido¡ Te invitamos a descubrir destinos fascinantes, experiencias únicas y aventuras inolvidables. 
                        ¡Reserva hoy y comienza tu viaje de ensueño con nosotros!
                    </p>
                    <form onSubmit={handleSubscribe} className="subscribe-form">
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="email-input"
                            />
                            <button
                                type="submit"
                                className={`subscribe-btn ${subscribed ? 'subscribed' : ''}`}
                                disabled={subscribed}
                            >
                                {subscribed ? (
                                    <span className="check-icon">✓</span>
                                ) : (
                                    'Suscribirse'
                                )}
                            </button>
                        </div>
                        {subscribed && (
                            <div className="success-message">
                                ¡Gracias por suscribirte con SISTEMHP! Pronto recibirás nuestras novedades.
                            </div>
                        )}
                    </form>
                </div>

                {/* Enlaces iconos */}
                <div className="footer-section links-section">
                    <h3>Enlaces</h3>
                    <ul className="quick-links">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    onMouseEnter={() => setHoveredItem(`link-${index}`)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className={hoveredItem === `link-${index}` ? 'hovered' : ''}
                                >
                                    <span className="link-icon">{link.icon}</span>
                                    <span className="link-text">{link.name}</span>
                                    <span className="link-underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Redes sociales */}
                <div className="footer-section social-section">
                    <h3>Síguenos</h3>
                    <p className="social-text">Conéctate con nosotros en redes sociales</p>
                    <div className="social-icons">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                aria-label={social.name}
                                onMouseEnter={() => setHoveredItem(`social-${index}`)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={`social-icon ${hoveredItem === `social-${index}` ? 'hovered' : ''}`}
                                style={{ '--hover-color': social.color }}
                            >
                                {social.icon}
                                <span className="social-tooltip">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="wave-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="var(--primary-color)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="footer-bottom-content">
                    <p>
                        © {new Date().getFullYear()} SistemHP. Hecho con <FaHeart className="heart-icon" /> por Nosotros
                    </p>
                    <button
                        onClick={scrollToTop}
                        className={`back-to-top ${showScrollButton ? 'show' : ''}`}
                        aria-label="Volver arriba"
                    >
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;