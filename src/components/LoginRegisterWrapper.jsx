import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRegisterWrapper = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    // Inicializar con usuario admin por defecto si no existe
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

    const handleRegister = (e) => {
        e.preventDefault();
        if (email && pass && name) {
            // Verificar si el usuario ya existe
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
            setIsLogin(true); // cambiar a login
            // Limpiar formulario
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
            if (user.role === 'admin') {
                navigate('/welcome', { state: { name: user.name } });
            } else {
                navigate('/welcome', { state: { name: user.name } });
            }
        } else {
            alert('Correo o contraseña incorrectos');
        }
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
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                        />
                        <button 
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Entrar
                        </button>
                    </form>
                    <p style={{ marginTop: '10px' }}>
                        ¿No tienes cuenta?{" "}
                        <button 
                            onClick={() => setIsLogin(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#2196F3',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            Regístrate
                        </button>
                    </p>
                    <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
                        <p>Usuario admin: admin@gmail.com</p>
                        <p>Contraseña: admin123</p>
                    </div>
                </>
            ) : (
                <>
                    <h2>Registro</h2>
                    <form onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                        />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                        />
                        <button 
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                backgroundColor: '#2196F3',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Registrar
                        </button>
                    </form>
                    <p style={{ marginTop: '10px' }}>
                        ¿Ya tienes cuenta?{" "}
                        <button 
                            onClick={() => setIsLogin(true)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#2196F3',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            Iniciar sesión
                        </button>
                    </p>
                </>
            )}
        </div>
    );
};

export default LoginRegisterWrapper;