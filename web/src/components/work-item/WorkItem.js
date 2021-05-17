import './WorkItem.scss';
import '../../_presets.scss';
const work = require('../../data/Work.json');

function WorkItem( {work:{ id, title, subtitle, logo, from, to, tasks }} ) {
    return (
        <section>
            <h3>{title}</h3>
        </section>
    );
}

export default WorkItem;
