import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess, onSwitchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            onLoginSuccess(user.name);
        } else {
            alert("Correo o contraseña incorrectos");
        }
    };

    return (
        <form onSubmit={handleLogin} className="form">
            <h2>Iniciar Sesión</h2>
            <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Entrar</button>
            <p>¿No tienes cuenta?
                <button onClick={onSwitchToRegister}>Regístrate</button>
            </p>

        </form>
    );
};

export default LoginForm;
