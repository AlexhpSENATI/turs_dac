import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from "react";

import SecHero from './components/sec_hero.jsx';
import Inicio from './components/index.jsx';
import Contacto from './components/contact.jsx';
import Destino from './components/destino.jsx';
import Blog from './components/blog.jsx';  
import Nosotros from './components/nosotros.jsx';
import Promocion from './components/promocion.jsx';



import "bootstrap/dist/css/bootstrap.min.css";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* NAVAR Y CARRUSEL */}
        <Route path="/sec_hero" element={<SecHero />} />

        {/* TODOS LOS JSX */}
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/destino" element={<Destino/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/promocion" element={<Promocion/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <SecHero />
//     </div>
//     <div className="XD">
//     <Index />
//   </div>
    
//   );
// }

// export default App;
