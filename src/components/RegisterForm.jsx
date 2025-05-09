import React, { useState } from 'react';

const RegisterForm = ({ onSwitchToLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(u => u.email === email)) {
            alert("El correo ya está registrado");
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("¡Registro exitoso!");
        onSwitchToLogin();
    };

    return (
        <form onSubmit={handleRegister} className="form">
            <h2>Registrarse</h2>
            <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required />
            <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Registrarse</button>
            <p>¿Ya tienes cuenta?
                <button onClick={onSwitchToLogin}>Inicia sesión</button>
            </p>
        </form>
    );
};

export default RegisterForm;
