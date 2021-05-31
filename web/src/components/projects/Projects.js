import './Projects.scss';
import { Link } from 'react-router-dom';


function Projects({ project: { name, image, technologies, description, web, github } }) {
    return (
        <section className="container projectWrapper">
            <img className="col-lg-5" src={image} alt={name} />
                <div className="col-lg-4">
                    <h5 className="title">{name}</h5>
                    <p>{description}</p>
                    <div className="d-flex justify-content-start align-items-center">
                            {technologies.map(t => (
                                <img className="icon-style col-1" key={t} src={t} alt="technology" />
                            ))}    
                    </div>
                    <Link target="blank" className="btn" to={web}><i class="fab fa-github fa-2x"></i></Link> 
                    <Link target="blank" className="btn" to={github}><i class="fas fa-link fa-lg"></i></Link> 
                </div>
        </section>
    );
}

export default Projects;