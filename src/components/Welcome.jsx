import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/dash_turs.css";

const Welcome = () => {
    const location = useLocation();
    const name = location.state?.name || 'Usuario';
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReservas();
    }, []);

    const fetchReservas = async () => {
        try {
            const response = await fetch('http://localhost/turs_dac/api/reservas.php');
            if (!response.ok) {
                throw new Error('Error al obtener las reservas');
            }
            const data = await response.json();
            setReservas(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching reservas:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Estás seguro de eliminar esta reserva?')) return;

        try {
            const response = await fetch('http://localhost/turs_dac/api/reservas.php', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Error al eliminar');
            }

            const result = await response.json();
            alert(result.message);
            fetchReservas();
        } catch (error) {
            console.error('Error eliminando reserva:', error);
            alert(`Error al eliminar: ${error.message}`);
        }
    };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return (
        <div className="dash-turs-welcome-container">
            <div className="dash-turs-wwelcome-header">
                <h1>Bienvenido, {name}</h1>
            </div>

            {loading ? (
                <div className="dash-turs-loading-message">Cargando reservas...</div>
            ) : error ? (
                <div className="dash-turs-error-message">Error: {error}</div>
            ) : (
                <div className="dash-turs-reservas-section">
                    <h2>Tus Reservas</h2>

                    {reservas.length === 0 ? (
                        <p className="dash-turs-no-reservas">No hay reservas registradas.</p>
                    ) : (
                        <div className="dash-turs-table-responsive">
                            <table className="dash-turs-reservas-table">
                                <thead>
                                    <tr>
                                        <th>Lugar</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Celular</th>
                                        <th>Fecha de Salida</th>
                                        <th>Adultos</th>
                                        <th>Precio Total</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservas.map((reserva) => (
                                        <tr key={reserva.id}>
                                            <td>{reserva.lugar}</td>
                                            <td>{reserva.nombre}</td>
                                            <td>{reserva.apellido}</td>
                                            <td>{reserva.celular}</td>
                                            <td>{formatDate(reserva.fecha_salida)}</td>
                                            <td>{reserva.adultos}</td>
                                            <td>S/{Number(reserva.precio_total).toFixed(2)}</td>
                                            <td>
                                                <button
                                                    onClick={() => handleDelete(reserva.id)}
                                                    className="dash-turs-delete-btn"
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Welcome;