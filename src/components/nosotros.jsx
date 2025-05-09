import '../styles/style.css';


export default function Nosotros() {
  return (
    <div className="pagina-nosotros">
      <div className="nosotros-inf">
        <div className="text-section">
          <div className="highlight"></div>
          <h1>SOMOS HUELLA<br />PATRIMONIAL HP</h1>
          <p>
            Somos una agencia de turismo que diseña, promueve nuevas y realiza
            paquetes turísticos responsables en Perú.
          </p>
          <p>
            Planificamos cada viaje de acuerdo con el presupuesto y las
            necesidades de cada cliente.
          </p>
          <p>
            <strong>
              Trabajamos todos los días para asegurarnos de traer beneficios
              sociales, económicos y ambientales a todas las comunidades en
              todos los destinos.
            </strong>
          </p>
          <p>Lo que nos diferencia es nuestra cercanía con nuestros clientes.</p>
        </div>
        <div className="logo">
          <img src="/logo.png" alt="LOGO HP " />
        </div>
      </div>
    </div>
  );
}
