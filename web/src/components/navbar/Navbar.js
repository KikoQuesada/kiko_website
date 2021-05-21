import './Navbar.scss';
import '../../App.scss';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="col-lg-2">
            <section className="side-navbar">
                <Link to="/projects" className="link">Proyectos</Link>
                <Link to="/workexperience" className="link">Experiencia Laboral</Link>
                <Link to="/studies" className="link">Estudios</Link>
                <Link to="/contact" className="link">Contáctame</Link>
            </section>
        </nav>
    );
}

export default Navbar;