import './Projects.scss';


function Projects({ project: { name, image, technologies, description, url } }) {
    return (
        <section className="d-flex flex-row justify-content-start mb-5">
            <article className="row">
                <div className="col-lg-6">
                    <h5 className="title">{name}</h5>
                    <p>{description}</p>
                    <div className="d-flex justify-content-start align-items-center">
                      
                            {technologies.map(t => (
                                <img className="icon-style col-1" key={t} src={t} alt="technology" />
                            ))}
                        
                        
                    </div>
                    <a target="blank" className="btn col-lg-4" href={url}>Ver Proyecto</a> 
                </div>
                <img className="col-4 project-image" src={image} alt={name} />
            </article>
        </section>
    );
}

export default Projects;