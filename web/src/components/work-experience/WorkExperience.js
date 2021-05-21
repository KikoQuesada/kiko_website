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
        }, 1500);

    })

    if(content.loading) {
        return <Loading />
                
    }


 
    return (
        <section className="col-lg-10">
            {data.map(work => (
                <WorkItem key={work.id} work={work}/>
            ))}
        </section>
    );
}

export default WorkExperience;