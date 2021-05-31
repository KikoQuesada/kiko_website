import './Studies.scss';

function Studies({ study: { university, title, location, image } }) {
    return (
        <section className="col-lg-6 study-wrapper">
                <section className="study-items">
                    <img className="study-img" src={image} alt={university} />
                    <article className="">
                        <h5>{university}</h5>
                        <h4>{title}</h4>
                        <i>{location}</i>
                    </article>
                </section>
        </section>

    );
}

export default Studies;