import Studies from '../studies/Studies'
import { useState, useEffect } from 'react';
import studiesData from '../../data/Studies.json';
import Loading from '../commons/loading/Loading';


function StudiesList() {

    const [ data, setData ] = useState({
        loading: true,  
        studiesData: []
    });


    useEffect(() => {
        setTimeout(() => {
            setData({
                loading: false, 
                data: data
            })
        }, 2000)
    })

    if (data.loading) {
        return <section className="loading-container"><Loading /></section>
    }

    return (
        <div className="col-lg-10">
            {studiesData.map(study => (
                <Studies key={study.id} study={study}/>
            ))}
        </div>
    );
}

export default StudiesList;