import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login_turs.css";

const LoginRegisterWrapper = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users'));
        if (!savedUsers || !savedUsers.some(user => user.email === 'admin@gmail.com')) {
            const defaultUsers = [
                {
                    name: 'ADM ALEX',
                    email: 'admin@gmail.com',
                    pass: 'admin123',
                    role: 'admin'
                },
                ...(savedUsers || [])
            ];
            localStorage.setItem('users', JSON.stringify(defaultUsers));
            setUsers(defaultUsers);
        } else if (savedUsers) {
            setUsers(savedUsers);
        }
    }, []);

    const toggleForm = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsLogin(!isLogin);
            setIsAnimating(false);
        }, 300);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (email && pass && name) {
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert('Este correo ya está registrado');
                return;
            }

            const newUser = { name, email, pass, role: 'user' };
            const updatedUsers = [...users, newUser];
            
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setUsers(updatedUsers);
            alert('Registrado correctamente');
            toggleForm();
            setName('');
            setEmail('');
            setPass('');
        } else {
            alert('Completa todos los campos');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(u => u.email === email && u.pass === pass);
        
        if (user) {
            navigate('/welcome', { state: { name: user.name } });
        } else {
            alert('Correo o contraseña incorrectos');
        }
    };

    return (
        <div className={`login-turs-container ${isAnimating ? 'login-turs-form-animate' : ''}`}>
            <div className="login-turs-header">
                <h2 className="login-turs-title">{isLogin ? 'Iniciar sesión' : 'Registro'}</h2>
                <div className="login-turs-toggle-line"></div>
            </div>
            
            {isLogin ? (
                <form onSubmit={handleLogin} className="login-turs-form">
                    <div className="login-turs-input-group">
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="login-turs-input"
                        />
                    </div>
                    <div className="login-turs-input-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                            className="login-turs-input"
                        />
                    </div>
                    <button type="submit" className="login-turs-button">
                        Entrar
                    </button>
                </form>
            ) : (
                <form onSubmit={handleRegister} className="login-turs-form">
                    <div className="login-turs-input-group">
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="login-turs-input"
                        />
                    </div>
                    <div className="login-turs-input-group">
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="login-turs-input"
                        />
                    </div>
                    <div className="login-turs-input-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                            className="login-turs-input"
                        />
                    </div>
                    <button type="submit" className="login-turs-button">
                        Registrar
                    </button>
                </form>
            )}

            <div className="login-turs-toggle-text">
                {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
                <button onClick={toggleForm} className="login-turs-toggle-button">
                    {isLogin ? 'Regístrate' : 'Iniciar sesión'}
                </button>
            </div>

            {isLogin && (
                <div className="login-turs-admin-info">
                    <p>Usuario admin: admin@gmail.com</p>
                    <p>Contraseña: admin123</p>
                </div>
            )}
        </div>
    );
};

export default LoginRegisterWrapper;