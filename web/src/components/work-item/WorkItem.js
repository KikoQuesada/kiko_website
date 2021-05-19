import './WorkItem.scss'


function WorkItem({ work: { title, subtitle, logo, from, to, tasks } }) {

    return (

        <section className="container workWrapper">
            <article className="d-flex align-items-start">
                <img className="w-25" src={logo} alt={title} />
                <div>
                    <h5>{title}</h5>
                    <p><i>{subtitle}</i></p>
                    <p><i>From {from}</i> <i>To {to}</i></p>
                    <h6>Tasks</h6>
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