import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
    // MODIFICA SOLO LA FUNCIÓN handleDelete:
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
            fetchReservas(); // Actualizar lista
        } catch (error) {
            console.error('Error eliminando reserva:', error);
            alert(`Error al eliminar: ${error.message}`);
        }
    };

    // ... (el resto de tu componente Welcome sigue igual)
    // const handleDelete = async (id) => {
    //     if (window.confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
    //         try {
    //             const response = await fetch(`http://localhost/api/reservas.php?id=${id}`, {
    //                 method: 'DELETE',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ id: id })
    //             });

    //             if (!response.ok) {
    //                 const errorText = await response.text();
    //                 throw new Error(errorText || 'Error al eliminar');
    //             }

    //             const result = await response.json();
    //             alert(result.message);
    //             fetchReservas(); // Actualizar lista
    //         } catch (error) {
    //             console.error('Error eliminando reserva:', error);
    //             alert(`Error al eliminar: ${error.message}`);
    //         }
    //     }
    // };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return (
        <div className="welcome-container">
            <div className="welcome-header">
                <h1>Bienvenido, {name}</h1>
                <p>Aquí puedes gestionar todas tus reservas turísticas</p>
            </div>

            {loading ? (
                <div className="loading-message">Cargando reservas...</div>
            ) : error ? (
                <div className="error-message">Error: {error}</div>
            ) : (
                <div className="reservas-section">
                    <h2>Tus Reservas</h2>

                    {reservas.length === 0 ? (
                        <p className="no-reservas">No hay reservas registradas.</p>
                    ) : (
                        <div className="table-responsive">
                            <table className="reservas-table">
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
                                                    className="delete-btn"
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

            <style jsx>{`
                .welcome-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                
                .welcome-header {
                    text-align: center;
                    margin-bottom: 40px;
                    padding: 20px;
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                
                .welcome-header h1 {
                    color: #2c3e50;
                    margin-bottom: 10px;
                }
                
                .reservas-section {
                    margin-top: 30px;
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                
                .reservas-section h2 {
                    color: #2c3e50;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #eee;
                }
                
                .table-responsive {
                    overflow-x: auto;
                }
                
                .reservas-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                
                .reservas-table th, .reservas-table td {
                    padding: 12px 15px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                
                .reservas-table th {
                    background-color: #3498db;
                    color: white;
                    position: sticky;
                    top: 0;
                }
                
                .reservas-table tr:hover {
                    background-color: #f5f5f5;
                }
                
                .delete-btn {
                    background-color: #e74c3c;
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                
                .delete-btn:hover {
                    background-color: #c0392b;
                }
                
                .loading-message, .no-reservas, .error-message {
                    text-align: center;
                    padding: 20px;
                    margin: 20px 0;
                    background-color: #f8f9fa;
                    border-radius: 4px;
                }
                
                .error-message {
                    color: #e74c3c;
                    background-color: #fadbd8;
                }
            `}</style>
        </div>
    );
};

export default Welcome;