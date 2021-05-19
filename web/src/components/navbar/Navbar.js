import './Navbar.scss';
import '../../App.scss';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="right-section">
            <section className="side-navbar">
                <Link className="link">Proyectos</Link>
                <Link to="/workexperience" className="link">Experiencia Laboral</Link>
                <Link className="link">Estudios</Link>
                <Link className="link">Contáctame</Link>
            </section>
        </nav>
    );
}

export default Navbar;