import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRegisterWrapper = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (email && pass && name) {
            const user = { name, email, pass };
            localStorage.setItem('user', JSON.stringify(user));
            alert('Registrado correctamente');
            setIsLogin(true); // cambiar a login
        } else {
            alert('Completa todos los campos');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser && savedUser.email === email && savedUser.pass === pass) {
            navigate('/welcome', { state: { name: savedUser.name } }); // ir a welcome
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
                        /><br /><br />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                        /><br /><br />
                        <button type="submit">Entrar</button>
                    </form>
                    <p style={{ marginTop: '10px' }}>
                        ¿No tienes cuenta?{" "}
                        <button onClick={() => setIsLogin(false)}>Regístrate</button>
                    </p>
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
                        /><br /><br />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /><br /><br />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                        /><br /><br />
                        <button type="submit">Registrar</button>
                    </form>
                    <p style={{ marginTop: '10px' }}>
                        ¿Ya tienes cuenta?{" "}
                        <button onClick={() => setIsLogin(true)}>Iniciar sesión</button>
                    </p>
                </>
            )}
        </div>
    );
};

export default LoginRegisterWrapper;



// import React, { useState } from 'react';

// const LoginRegisterWrapper = () => {
//   const [isLogin, setIsLogin] = useState(true); // true: login, false: registro

//   const handleSwitchToRegister = () => {
//     setIsLogin(false);
//   };

//   const handleSwitchToLogin = () => {
//     setIsLogin(true);
//   };

//   return (
//     <div style={{
//       maxWidth: '400px',
//       margin: '50px auto',
//       padding: '20px',
//       border: '1px solid #ccc',
//       borderRadius: '8px',
//       textAlign: 'center'
//     }}>
//       {isLogin ? (
//         <>
//           <h2>Iniciar sesión</h2>
//           <form>
//             <input type="email" placeholder="Correo electrónico" required /><br /><br />
//             <input type="password" placeholder="Contraseña" required /><br /><br />
//             <button type="submit">Entrar</button>
//           </form>
//           <p style={{ marginTop: '10px' }}>
//             ¿No tienes cuenta?{" "}
//             <button onClick={handleSwitchToRegister}>Regístrate</button>
//           </p>
//         </>
//       ) : (
//         <>
//           <h2>Registro</h2>
//           <form>
//             <input type="text" placeholder="Nombre completo" required /><br /><br />
//             <input type="email" placeholder="Correo electrónico" required /><br /><br />
//             <input type="password" placeholder="Contraseña" required /><br /><br />
//             <button type="submit">Registrar</button>
//           </form>
//           <p style={{ marginTop: '10px' }}>
//             ¿Ya tienes cuenta?{" "}
//             <button onClick={handleSwitchToLogin}>Iniciar sesión</button>
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default LoginRegisterWrapper;
