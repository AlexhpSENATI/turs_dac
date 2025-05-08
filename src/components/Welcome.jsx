import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const name = location.state?.name || 'Usuario';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido, {name} 🎉</h1>
    </div>
  );
};

export default Welcome;
