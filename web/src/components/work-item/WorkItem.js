import './WorkItem.scss'


function WorkItem({ work: { title, subtitle, logo, from, to, tasks } }) {

    return (
            <article className="workWrapper">
                <img className="work-image" src={logo} alt={title} />
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
    );
}

export default WorkItem;