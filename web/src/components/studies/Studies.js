import './Studies.scss';

function Studies({ study: { university, title, location, image } }) {
    return (
        <section className="row study-wrapper">
                <section className="d-flex align-items-center">
                    <img className="study-img" src={image} alt={university} />
                    <article>
                        <h5>{university}</h5>
                        <h4>{title}</h4>
                        <i>{location}</i>
                    </article>
                </section>
        </section>

    );
}

export default Studies;