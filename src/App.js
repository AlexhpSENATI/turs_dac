import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";

import SecHero from './components/sec_hero.jsx';
import Inicio from './components/index.jsx';
import Contacto from './components/contact.jsx';
import Destino from './components/destino.jsx';
import Blog from './components/blog.jsx';  
import Nosotros from './components/nosotros.jsx';
import Promocion from './components/promocion.jsx';

// import LoginForm from './components/LoginForm.jsx';
// import RegisterForm from './components/RegisterForm.jsx';
import Welcome from './components/Welcome.jsx';
import LoginRegisterWrapper from './components/LoginRegisterWrapper.jsx'; // importa el componente




import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loggedUserName, setLoggedUserName] = useState('');

  const handleLoginSuccess = (name) => {
    setLoggedUserName(name);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas principales */}
        <Route path="/" element={<Inicio />} />
        <Route path="/sec_hero" element={<SecHero />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/destino" element={<Destino />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/promocion" element={<Promocion />} />

        {/* Autenticación */}
        {/* <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/registro" element={<RegisterForm />} /> */}


        <Route path="/welcome " element={<Welcome/>} />


        <Route path="/login" element={<LoginRegisterWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import React from "react";

// import SecHero from './components/sec_hero.jsx';
// import Inicio from './components/index.jsx';
// import Contacto from './components/contact.jsx';
// import Destino from './components/destino.jsx';
// import Blog from './components/blog.jsx';  
// import Nosotros from './components/nosotros.jsx';
// import Promocion from './components/promocion.jsx';
// import Login from './components/LoginForm.jsx'

// import Registro from './components/RegisterForm.jsx'
// import Welcome  from './components/Welcome.jsx';

// import "bootstrap/dist/css/bootstrap.min.css";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* NAVAR Y CARRUSEL */}
//         <Route path="/sec_hero" element={<SecHero />} />

//         {/* TODOS LOS JSX */}
//         <Route path="/" element={<Inicio />} />
//         <Route path="/contacto" element={<Contacto />} />
//         <Route path="/destino" element={<Destino/>} />
//         <Route path="/blog" element={<Blog/>} />
//         <Route path="/nosotros" element={<Nosotros/>} />
//         <Route path="/promocion" element={<Promocion/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

