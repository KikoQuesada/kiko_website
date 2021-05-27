import './Loading.scss';

function Loading() {
    return (
        
        <div class="circular">
            <div class="inner"></div>
            <img className="number" src="https://res.cloudinary.com/getapet/image/upload/v1621243390/Kiko%20Website/Logo_KQ_white_l2pjrf.png" alt="kiko-quesada"/>
            <div class="circle">
                <div class="bar left">
                    <div class="progress"></div>
                </div>
                <div class="bar right">
                    <div class="progress"></div>
                </div>
                
                
                
            </div>
        </div>



        /* <div className="col-lg-10" id="loading-wrapper">
            <div id="loading-text"></div>
            <div id="loading-content"></div>
        </div> */
    );
}

export default Loading;