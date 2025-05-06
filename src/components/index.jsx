import React, { useState, useEffect, useRef } from "react";
import SecHero from "../components/sec_hero.jsx";

function Inicio() {
  return (
    <>
      
      {/* Puedes incluir SecHero si lo quieres aquí */}
      <SecHero />
      <div>
        <h1>Página de Inicio</h1>
        <p>Bienvenido a nuestra aplicación.</p>
      </div>
    </>
  );
}

export default Inicio;
