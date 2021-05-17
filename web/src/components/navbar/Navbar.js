import './Navbar.scss';
import '../../App.scss';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <navbar className="right-section">
            <section className="side-navbar">
                <Link className="link">Proyectos</Link>
                <Link to="/workexperience" className="link">Experiencia Laboral</Link>
                <Link className="link">Estudios</Link>
                <Link className="link">Contáctame</Link>
            </section>
        </navbar>
    );
}

export default Navbar;