import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Preloader from './components/preloader.jsx'; // Agregado

import SecHero from './components/sec_hero.jsx';
import Inicio from './components/index.jsx';
import Contacto from './components/contact.jsx';
import Destino from './components/destino.jsx';
import Blog from './components/blog.jsx';
import Nosotros from './components/nosotros.jsx';
import Promocion from './components/promocion.jsx';
import Welcome from './components/Welcome.jsx';
import LoginRegisterWrapper from './components/LoginRegisterWrapper.jsx';

// Componente que detecta cambios de ruta y muestra el loader
const RouterWrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    },1800); // Duración del Preloader

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sec_hero" element={<SecHero />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/destino" element={<Destino />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/promocion" element={<Promocion />} />
      <Route path="/login" element={<LoginRegisterWrapper />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import React, { useState } from "react";

// import SecHero from './components/sec_hero.jsx';
// import Inicio from './components/index.jsx';
// import Contacto from './components/contact.jsx';
// import Destino from './components/destino.jsx';
// import Blog from './components/blog.jsx';
// import Nosotros from './components/nosotros.jsx';
// import Promocion from './components/promocion.jsx';

// // import LoginForm from './components/LoginForm.jsx';
// // import RegisterForm from './components/RegisterForm.jsx';
// import Welcome from './components/Welcome.jsx';
// import LoginRegisterWrapper from './components/LoginRegisterWrapper.jsx'; // importa el componente




// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [loggedUserName, setLoggedUserName] = useState('');

//   const handleLoginSuccess = (name) => {
//     setLoggedUserName(name);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Páginas principales */}
//         <Route path="/" element={<Inicio />} />
//         <Route path="/sec_hero" element={<SecHero />} />
//         <Route path="/contacto" element={<Contacto />} />
//         <Route path="/destino" element={<Destino />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/nosotros" element={<Nosotros />} />
//         <Route path="/promocion" element={<Promocion />} />
//         <Route path="/login" element={<LoginRegisterWrapper />} />
//         <Route path="/welcome" element={<Welcome />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

