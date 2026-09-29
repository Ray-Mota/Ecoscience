import { Link } from 'react-router-dom';
import images from '../assets/images.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="novo-footer">
      <div className="footer-content">
        <div className="footer-col">
          <img src={images.logo} alt="Logo Ecoscience" className="footer-logo" />
        </div>

        <div className="footer-col">
          <h3>Explorar</h3>
          <Link to="/impacto">Impacto</Link>
          <Link to="/poluicao">Poluição</Link>
          <Link to="/energias">Energias renováveis</Link>
        </div>

        <div className="footer-col">
          <h3>Interaja</h3>
          <Link className="footer-btn" to="/ecochat">
            Ecochat
          </Link>
          <Link className="footer-btn" to="/calculadora">
            Calculadora de Carbono
          </Link>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>
          <a className="footer-btn" href="#">
            📨 Contato
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ecoscience - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
