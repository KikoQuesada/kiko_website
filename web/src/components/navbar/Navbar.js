import './Navbar.scss';
import '../../App.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from '../commons/assets/close.svg';
import { ReactComponent as MenuIcon } from '../commons/assets/hamburguer.svg';
import { useState } from 'react';



function Navbar() {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <Link to="/"><img
                        className="img-container"
                        src="https://res.cloudinary.com/getapet/image/upload/v1621243390/Kiko%20Website/Logo_KQ_white_l2pjrf.png"
                        alt="KQ"
                    /></Link>
                </div>
                <section className={click ? "nav-options active" : "nav-options"}>
                    <div className="option" onClick={closeMobileMenu}>
                        <Link className='nav-link' to="/">Home</Link>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <Link className="nav-link" to="/workexperience">Work Experience</Link>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <Link className="nav-link" to="/studies">Studies</Link>
                    </div>
                </section>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>








        /* <nav className="col-lg-2">
            <section className="side-navbar">
                <Link to="/projects" className="link">Proyectos</Link>
                <Link to="/workexperience" className="link">Experiencia Laboral</Link>
                <Link to="/studies" className="link">Estudios</Link>
                <Link to="/contact" className="link">Contáctame</Link>
            </section>
        </nav> */
    );
}

export default Navbar;