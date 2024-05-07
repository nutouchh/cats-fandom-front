import React, { useState, useEffect } from 'react';
import soundRunning from './sc/happy-happy-happy-cat.mp3';
import soundCrying from './sc/cry-banana-cat.mp3';
import './style/RunawayCat.css';
// import {Button, Form, Input} from "antd";

const RunawayCat = ({ roles }) => {

    // const isAdmin = roles.includes("admin");
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [image, setImage] = useState("https://media.tenor.com/TT1hCsF1vUwAAAAi/banana-cat-running.gif");
    const [isMoving, setIsMoving] = useState(true);
    const [mainTrackPlaying, setMainTrackPlaying] = useState(true);

    useEffect(() => {
        const moveImage = () => {
            if (!isMoving) return;
            const newX = Math.random() * (window.innerWidth - 100) * 0.7;
            const newY = Math.random() * (window.innerHeight - 100) * 0.7;
            setPosition({ x: newX, y: newY });
        };

        const interval = setInterval(moveImage, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [position, isMoving]);

    useEffect(() => {
        if (mainTrackPlaying) {
            const audio = new Audio(soundRunning);
            audio.play().catch(error => {
                if (error.name === 'NotAllowedError') {
                    console.log("The play() request was interrupted by a call to pause()");
                }
            });
            return () => {
                audio.pause();
                audio.currentTime = 0;
            };
        }
    }, [mainTrackPlaying]);

    const changeImage = () => {
        const audio = new Audio(soundCrying);
        audio.play();
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 1100);
        setMainTrackPlaying(false);
        setIsMoving(false);
        setImage("https://media.tenor.com/8Z2XV772ZlwAAAAi/banana-cat-banana-cat-crying.gif");
        setTimeout(() => {
            setImage("https://media.tenor.com/TT1hCsF1vUwAAAAi/banana-cat-running.gif");
            setMainTrackPlaying(true);
            setIsMoving(true);
        }, 1100);
    };

    return (
        <div >
            {/*{isAdmin ? (*/}
                <div className="base-cat">
                    <div style={{position: 'fixed', left: position.x, top: position.y}}>
                        <p style={{color: '#fff'}}>Поймай кота</p>
                        <img src={image} alt="Runaway" style={{
                            width: image === "https://media.tenor.com/TT1hCsF1vUwAAAAi/banana-cat-running.gif" ? '500px' : '250px',
                            height: 'auto'
                        }} onClick={changeImage}/>
                    </div>
                </div>
            {/*) : (*/}
            {/*    <div >*/}
            {/*        <p>Баловаться могут только админы!</p>*/}
            {/*    </div>*/}
            {/*)}*/}

        </div>
    );
};

export default RunawayCat;
