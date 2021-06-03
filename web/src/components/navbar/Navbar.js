import './Navbar.scss';
import '../../App.scss';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as CloseMenu } from '../commons/assets/close.svg';
import { ReactComponent as MenuIcon } from '../commons/assets/hamburguer.svg';
import { useState, useEffect } from 'react';



function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 0);
        });
    }, []);




    return (
        <header className={scroll ? 'header scrolling' : 'header'}>
            <div className="logo-nav">

                <div className="logo-container">
                    <Link to="/"><img
                        className="col-4 img-logo"
                        src="https://res.cloudinary.com/getapet/image/upload/v1621243390/Kiko%20Website/Logo_KQ_white_l2pjrf.png"
                        alt="KQ"
                    /></Link>
                </div>
               <div className="social-icon-container">
                <Link target="blank" className="social-media" to='https://github.com/KikoQuesada'><i className="fab fa-github fa-lg"></i></Link>
                <Link target="blank" className="social-media" to='https://www.linkedin.com/in/franciscoquesadacabello/'><i className="fab fa-linkedin-in fa-lg"></i></Link>
                <Link target="blank" className="social-media" to='https://twitter.com/_Kiko_7'><i className="fab fa-twitter fa-lg"></i></Link>
               </div>
                
                
            </div>
            <div className="nav-container">
                <section className={click ? "nav-options active" : "nav-options"}>
                    <div className="option" onClick={closeMobileMenu}>
                        <NavLink activeClassName="nav-link-active" className='nav-link' to="/">Home</NavLink>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <NavLink activeClassName="nav-link-active" className="nav-link" to="/projects">Proyectos</NavLink>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <NavLink activeClassName="nav-link-active" className="nav-link" to="/workexperience">Experiencia Laboral</NavLink>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <NavLink activeClassName="nav-link-active" className="nav-link" to="/studies">Estudios</NavLink>
                    </div>
                </section>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <CloseMenu className="menu-icon" />
                    ) : (
                        <MenuIcon className="menu-icon" />
                    )}
                </div>
            </div>

        </header>
    );
}

export default Navbar;