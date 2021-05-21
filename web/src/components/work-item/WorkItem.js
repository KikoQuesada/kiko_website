import './WorkItem.scss'


function WorkItem({ work: { title, subtitle, logo, from, to, tasks } }) {

    return (

        <section className="workWrapper">
            <article className="d-flex align-items-start justify-content-center">
                <img className="w-25" src={logo} alt={title} />
                <div>
                    <h5>{title}</h5>
                    <p><i>{subtitle}</i></p>
                    <p><i>Desde {from}</i> <i>al {to}</i></p>
                    <h6>Tareas</h6>
                    <ul>
                        {tasks.map(task => (
                            <li key={task}>{task}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>

    );
}

export default WorkItem;