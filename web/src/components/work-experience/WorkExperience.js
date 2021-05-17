import './WorkExperience.scss';
import '../../_presets.scss';
import WorkItem from '../work-item/WorkItem';
import { useState, useEffect } from 'react';
import data from '../../data/Work.json';



function WorkExperience() {

    const [ data, setData ] = useState();



    useEffect(() => {
        setData(data)
    })

    const { works } = data;

    return (
        <section className="left-section">
            <article className="row">
                {works.map(work => (
                    <WorkItem key={work.id} work={work}>
                        
                    </WorkItem>
                ))}
            </article>
        </section>
    );
}

export default WorkExperience;