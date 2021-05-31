import './Loading.scss';

function Loading() {
    return (
        
        <div className="circular">
            <div className="inner"></div>
            <img className="number" src="https://res.cloudinary.com/getapet/image/upload/v1621243390/Kiko%20Website/Logo_KQ_white_l2pjrf.png" alt="kiko-quesada"/>
            <div className="circle">
                <div className="bar left">
                    <div className="progress"></div>
                </div>
                <div className="bar right">
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;