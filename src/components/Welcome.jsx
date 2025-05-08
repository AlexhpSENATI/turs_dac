import React from 'react';

const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <h1>Bienvenido, {name}</h1>
    </div>
  );
};

export default Welcome;
