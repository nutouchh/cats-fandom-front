import React, { useState } from 'react';
import './style/MusicRectangles.css';
import music1 from "./music/oiia.mp3";
import music2 from "./music/m-e-o-w.mp3";
import music3 from "./music/huh-cat.mp3";
import music4 from "./music/cats-arguing.mp3";
import music5 from "./music/maxwell-the-cat-theme.mp3";
import music6 from "./music/wha-wha-wha-cat.mp3";
import music7 from "./music/cat-meow-mp3.mp3";
import music8 from "./music/meow-1.mp3";
import music9 from "./music/nononono-cat-mp3cut.mp3";
import music10 from "./music/cat-iphone-ringtone.mp3";
import music11 from "./music/cat-club.mp3";
import music12 from "./music/happy-happy-happy-cat (1).mp3";
import music13 from "./music/chipi-chapa-cat-meme.mp3";


const MusicRectangles = () => {
    const [currentTrack, setCurrentTrack] = useState(null);

    const tracks = [
        music1,
        music2,
        music3,
        music4,
        music5,
        music6,
        music7,
        music8,
        music9,
        music10,
        music11,
        music12,
        music13
    ];

    const playAudio = (trackIndex) => {
        const audio = new Audio(tracks[trackIndex]);
        if (currentTrack && !currentTrack.paused) {
            currentTrack.pause();
        }
        audio.play();
        setCurrentTrack(audio);
        setTimeout(() => {
            audio.pause();
        }, 5000);
    };

    return (
        <div className="piano-container">
            {tracks.map((track, index) => (
                <div key={index} className="piano-key" onClick={() => playAudio(index)}>
                    <p style={{marginTop:'330%'}}> {index}</p>
                </div>
            ))}
        </div>
    );
};

export default MusicRectangles;
