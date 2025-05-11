// src/components/Preloader.jsx
import React from 'react';
import '../styles/preloader.css';


const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader-content">
                <img
                    src="./gifautoload.gif"
                    alt="Cargando..."
                    onContextMenu={(e) => e.preventDefault()}
                />
                <div className="typewriter-wrapper">
                    <span className="typewriter-text">
                        HUELLA <strong>PATRIMONIAL</strong><span className="highlight">HP</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
