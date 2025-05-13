import React, { useState, useEffect } from 'react';
// import { FaMapMarkedAlt, FaClock, FaCalendarAlt, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

const TourPackages = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    fecha: '',
    adultos: 1
  });

  // Paquetes turísticos yanahunaca
  const packages = [
    {
      id: 1,
      title: 'YANAHUANCA',
      description: 'La provincia de Yanahuanca, en Pasco, resalta por sus paisajes andinos y su herencia cultural.',
      price: 197.50,
      originalPrice: 250.00,
      images: [
        './img/nosotrosfotos/fotoN01.png',
        './img/nosotrosfotos/fotoN01.png',
        './img/nosotrosfotos/fotoN01.png',
        './img/nosotrosfotos/fotoN01.png'
      ],
      img: './img/fotosprecio/yanahuanca01.png',
      alt: 'yanahuanca'
    },
    {
      id: 2,
      title: 'HUARAHUTAMBO',
      description: 'Se cuenta que en este lugar existió un asentamiento del Reino de los Yaro, que en su momento. ',
      price: 320.00,
      originalPrice: 400.00,
      images: [
        './img/fotosprecio/yanahuanca01.png',
        './img/fotosprecio/yanahuanca01.png'
      ],
      img: './img/fotosprecio/huarautambo01.png',
      alt: 'huarautambo'
    },
    {
      id: 3,
      title: 'ICHUGAN',
      description: 'Tiene templos, chullpas, unidades domésticas, hornos de construcción de cerámicos.',
      price: 150.75,
      originalPrice: 180.00,
      images: [
        './img/fotosprecio/yanahuanca01.png',
        './img/fotosprecio/yanahuanca01.png'
      ],
      img: './img/fotosprecio/ichugan01.png',
      alt: 'ichugan'
    },
    {
      id: 4,
      title: 'BAÑOS TERMALES ',
      description: 'Termomedicinal de Tambochaca, Las aguas subterráneas abastecen 10 pozas y una piscina',
      price: 50.70,
      originalPrice: 80.00,
      images: [
        './img/fotosprecio/yanahuanca01.png',
        './img/fotosprecio/yanahuanca01.png'
      ],
      img: './img/fotosprecio/villo.png',
      alt: 'BAÑOS TERMALES '
    },
    {
      id: 5,
      title: 'GOÑICUTAC ROCCO',
      description: 'Las edificaciones arqueológicas están distribuidas de este a oeste, destacando seis mausoleos funerarios de fina arquitectura intermedia',
      price: 70.70,
      originalPrice: 100.00,
      images: [
        './img/fotosprecio/yanahuanca01.png',
        './img/fotosprecio/yanahuanca01.png'
      ],
      img: './img/fotosprecio/goñicutac.png',
      alt: 'GOÑICUTAC ROCCO'
    },
    {
      id: 6,
      title: 'BAÑOS DE COLLPA',
      description: 'San Juan Baños De Rabí se localiza en el distrito de Yanahuanca, provincia de Daniel Carrión del departamento de Pasco, Perú. ',
      price: 120.70,
      originalPrice: 140.00,
      images: [
        './img/fotosprecio/yanahuanca01.png',
        './img/fotosprecio/yanahuanca01.png'
        ],
        img: './img/fotosprecio/rabi.png',
        alt: 'BAÑOS DE COLLPA',
    }
  ];

  // MODAL
  const openModal = (pkg) => {
    setCurrentPackage(pkg);
    setModalOpen(true);
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, fecha: today }));
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const calculateDiscount = () => {
    if (!currentPackage) return 0;
    return Math.round(((currentPackage.originalPrice - currentPackage.price) / currentPackage.originalPrice) * 100);
  };

  const calculateTotalPrice = () => {
    if (!currentPackage) return 0;
    return currentPackage.price * (parseInt(formData.adultos) || 1);
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor ingrese un correo electrónico válido");
      return;
    }

    const reservationData = {
      lugar: currentPackage.title, // Esto será HUARAUTAMBO u otro lugar
      nombre: formData.nombre,
      apellido: formData.apellido,
      celular: formData.celular,
      email: formData.email,
      fecha_salida: formData.fecha,
      adultos: parseInt(formData.adultos) || 1,
      paquete: currentPackage.title,
      precio_total: calculateTotalPrice()
    };

    try {
      const response = await fetch('http://localhost/turs_dac/api/reservas.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Gracias ${formData.nombre}, hemos recibido tu reserva. Te enviaremos la confirmación a ${formData.email}`);
        closeModal();
        setFormData({
          nombre: '',
          apellido: '',
          celular: '',
          email: '',
          fecha: new Date().toISOString().split('T')[0],
          adultos: 1
        });
      } else {
        throw new Error(result.message || 'Error al crear reserva');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al procesar tu reserva. Por favor intenta nuevamente.');
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     alert("Por favor ingrese un correo electrónico válido");
  //     return;
  //   }

  //   const reservationData = {
  //     ...formData,
  //     paquete: currentPackage.title,
  //     precioTotal: calculateTotalPrice()
  //   };

  //   console.log('Datos de reserva:', reservationData);
  //   alert(`Gracias ${formData.nombre}, hemos recibido tu reserva. Te enviaremos la confirmación a ${formData.email}`);
  //   closeModal();
  //   setFormData({
  //     nombre: '',
  //     apellido: '',
  //     celular: '',
  //     email: '',
  //     fecha: new Date().toISOString().split('T')[0],
  //     adultos: 1
  //   });
  // };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <div className='yanahuanca-precio'>
      <div className="yanahuanca-tour-packages">
        <header className="yanahuanca-header-precio">
          <div className='yanahuanca-titulo-precio'>
            <h1>Explora Nuestros Paquetes Turísticos</h1>
          </div>
          <div className='yanahuanca-p-precio'>
            <p>Descubre experiencias inolvidables en los mejores destinos</p>
          </div>
        </header>

        <div className="yanahuanca-card-container-precio">
          {packages.map(pkg => (
            <div className="yanahuanca-card" key={pkg.id} onClick={() => openModal(pkg)}>
              <img src={pkg.img} alt={pkg.alt} className="yanahuanca-card-img" loading="lazy" />
              <div className="yanahuanca-card-content">
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <div className="yanahuanca-card-price">Desde S/{pkg.price.toFixed(2)}</div>
                <button className="yanahuanca-card-btn">Más información</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && currentPackage && (
          <div className="yanahuanca-modal" onClick={(e) => e.target.className === 'yanahuanca-modal' && closeModal()}>
            <div className="yanahuanca-modal-content">
              <button className="yanahuanca-close-btn" onClick={closeModal} aria-label="Cerrar modal">×</button>

              <div className="yanahuanca">
                <div className="yanahuanca-header">
                  <h1 className="yanahuanca-title">{currentPackage.title}</h1>
                  <div className="yanahuanca-discount">{calculateDiscount()}% DESCUENTO</div>
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

                        <span>{formatDate(formData.fecha)}</span>
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
                      {currentPackage.images.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          className={index % 3 === 0 ? 'yanahuanca-img yanahuanca-large' : 'yanahuanca-img'}
                          alt={`Imagen ${index + 1} del paquete ${currentPackage.title}`}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="yanahuanca-form">
                    <div className="yanahuanca-price">
                      <div className="price-current">S/{currentPackage.price.toFixed(2)}</div>
                      <div className="price-original">Desde ${currentPackage.originalPrice.toFixed(2)}/persona</div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="nombre">NOMBRE</label>
                        <input
                          type="text"
                          id="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          placeholder="Ingrese su nombre"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="apellido">APELLIDO</label>
                        <input
                          type="text"
                          id="apellido"
                          value={formData.apellido}
                          onChange={handleInputChange}
                          placeholder="Ingrese su apellido"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="celular">CELULAR</label>
                        <input
                          type="tel"
                          id="celular"
                          value={formData.celular}
                          onChange={handleInputChange}
                          placeholder="Ingrese su celular"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">CORREO ELECTRÓNICO</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ingrese su correo electrónico"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="fecha">FECHA DE SALIDA</label>
                        <input
                          type="date"
                          id="fecha"
                          value={formData.fecha}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="adultos">ADULTOS</label>
                        <input
                          type="number"
                          id="adultos"
                          value={formData.adultos}
                          onChange={handleInputChange}
                          min="1"
                          required
                        />
                      </div>

                      <div className="yanahuanca-summary">
                        S/{currentPackage.price.toFixed(2)} x {formData.adultos} = S/{calculateTotalPrice().toFixed(2)}
                      </div>

                      <button type="submit" className="yanahuanca-btn">RESERVA AHORA</button>
                      <div className="yanahuanca-method">Online</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourPackages;