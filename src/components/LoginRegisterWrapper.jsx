import React, { useState } from 'react';

const LoginRegisterWrapper = () => {
  const [isLogin, setIsLogin] = useState(true); // true: login, false: registro

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      {isLogin ? (
        <>
          <h2>Iniciar sesión</h2>
          <form>
            <input type="email" placeholder="Correo electrónico" required /><br /><br />
            <input type="password" placeholder="Contraseña" required /><br /><br />
            <button type="submit">Entrar</button>
          </form>
          <p style={{ marginTop: '10px' }}>
            ¿No tienes cuenta?{" "}
            <button onClick={handleSwitchToRegister}>Regístrate</button>
          </p>
        </>
      ) : (
        <>
          <h2>Registro</h2>
          <form>
            <input type="text" placeholder="Nombre completo" required /><br /><br />
            <input type="email" placeholder="Correo electrónico" required /><br /><br />
            <input type="password" placeholder="Contraseña" required /><br /><br />
            <button type="submit">Registrar</button>
          </form>
          <p style={{ marginTop: '10px' }}>
            ¿Ya tienes cuenta?{" "}
            <button onClick={handleSwitchToLogin}>Iniciar sesión</button>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginRegisterWrapper;
