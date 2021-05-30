import './AboutMe.scss';
import '../../_presets.scss';

function AboutMe() {

    return (

        <section className="col-lg-10">
            <h2>Hola! mi nombre es Kiko Quesada</h2>
            <h3 className="mb-4">y soy <span className="emphasis">desarrollador web</span></h3>
            <h4>Puedes usar el panel que te dejo a la derecha para conocer más sobre mi.</h4>
            <h4>Más allá de mis estudios o experiencia
                    laboral me encantan los animales <i className="fas fa-paw"></i> (como podrás comprobar en uno de mis proyectos),
                    la música <i className="fas fa-headphones"></i> y los videojuegos <i className="fas fa-gamepad"></i></h4>
            <h4 className="mt-5">Tecnologías que controlo:</h4>
            <section className="d-flex justify-content-start mt-4">
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621587111/Kiko%20Website/javascript-js_c62ir9.png" alt="javascript" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621589025/Kiko%20Website/HTML5_rspbgd.png" alt="HTML" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621589025/Kiko%20Website/css3_icy8yr.png" alt="CSS" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621599109/Kiko%20Website/MaterialUI_itijkg.png" alt="Material UI" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621598825/Kiko%20Website/ReactJS_rz3try.png" alt="ReactJS" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621596975/Kiko%20Website/NodeJS_uqu2dm.png" alt="NodeJS" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621597142/Kiko%20Website/MongoDB_mzhttq.png" alt="Mongo" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621607485/Kiko%20Website/SASS_kz6hzv.png" alt="SASS" />
            </section>
            <h4 className="mt-5">En proceso de aprendizaje:</h4>
            <section className="d-flex justify-content-start mt-4">
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621608475/Kiko%20Website/Typesript_yohdi7.png" alt="typescript" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1621608475/Kiko%20Website/GraphQL_flmwnq.png" alt="graphQL" />
                <img className="technology-about" src="https://res.cloudinary.com/getapet/image/upload/v1622390275/Kiko%20Website/vertical-logo-monochromatic_f6w3zu.png" alt="Docker" />
            </section>
        </section>

    );
}

export default AboutMe;