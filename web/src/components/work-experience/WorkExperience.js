import '../../_presets.scss';
import data from '../../data/Work.json';
import WorkItem from '../work-item/WorkItem';
import { useState, useEffect } from 'react';
import Loading from './../commons/loading/Loading';



function WorkExperience() {

    const [content, setContent] = useState({
        loading: true,
        data: []
    });

    useEffect(() => {
        setTimeout(() => {
            setContent({
                loading: false,
                data: data
            })
        }, 2000);

    })

    if(content.loading) {
        return <section className="loading-container"><Loading /></section>
                
    }


 
    return (
        <section className="d-flex flex-column align-items-center justify-content-center">
            {data.map(work => (
                <WorkItem key={work.id} work={work}/>
            ))}
        </section>
    );
}

export default WorkExperience;