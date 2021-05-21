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
        }, 1500)
    });

    if (data.loading) {
        return <Loading />
    }

    return (
        <section className="col-lg-10">
            {projectsData.map(project => (
                <Projects key={project.id} project={project} />
            ))}
        </section>
    );
}

export default ProjectsList;