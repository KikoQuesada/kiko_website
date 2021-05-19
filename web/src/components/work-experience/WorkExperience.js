import './WorkExperience.scss';
import '../../_presets.scss';
import data from '../../data/Work.json';
import WorkItem from '../work-item/WorkItem';
import { useState, useEffect } from 'react';



function WorkExperience() {

    const [loading, setLoading] = useState({
        loading: true,
        data: []
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading({
                loading: false,
                data: data
            })
        }, 2000);
    })

    if(loading) {
        return <h3>LOADING....</h3>
                
    }


 
    return (
        <section className="left-section">
            {data.map(work => (
                <WorkItem key={work.id} work={work}/>
            ))}
        </section>
    );
}

export default WorkExperience;