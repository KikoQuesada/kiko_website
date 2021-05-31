import '../../_presets.scss';
import projectsData from '../../data/ProjectsData.json'
import Projects from '../projects/Projects';
import { useState, useEffect } from 'react';
import Loading  from '../commons/loading/Loading';

function ProjectsList() {

    const [ data, setData ] = useState({
        loading: true,
        projectsData: []
    })


    useEffect(() => {
        setTimeout(() => {
            setData({
                loading: false,
                projectsData: projectsData
            })
        }, 2000)
    });

    if (data.loading) {
        return <section className="loading-container"><Loading /></section>
    }

    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            {projectsData.map(project => (
                <Projects key={project.id} project={project} />
            ))}
        </section>
    );
}

export default ProjectsList;