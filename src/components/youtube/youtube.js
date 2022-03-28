import YouTube from 'react-youtube';
import './youtube.css';

function YoutubePlayer() {
    const opts = {
        height: '900',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const onReady = (event) => {
        return event.target.playVideo
    }
    return (
        <div className="youtubeContainer">
            <div className='videoTextContainer'>
                <h1 style={{ fontSize: 60, textAlign: 'start', lineHeight: 1, marginBottom: 40 }}>
                    Welcome to the <br />warehouse of the <br />future
                </h1>
                <p style={{ fontSize: 32, textAlign: 'start' }}>
                    Eliminate cycle counts<br />
                    with autonomous drones
                </p>
                <div className='videoBtn'>
                    <p>Get Demo</p>
                </div>
            </div>
            <YouTube videoId="6VhnU3_-KUY" opts={opts} />
        </div>
    );
}

export default YoutubePlayer;
