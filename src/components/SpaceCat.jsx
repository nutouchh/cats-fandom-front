import React from 'react';
import './style/SpaceCat.css';
import logo from "./sc/SpaceCat.png";
import music from "./sc/Materia.mp3"; // Путь к вашему аудиофайлу

function SpaceCat() {
    return (
        <div className="space-cat">
            <div className="cat-container">
                <div className="cat">
                    <img src={logo} className="logo" alt="logo"/>
                    <p>Hello, I'm banana cat ^-^</p>
                    <p>Help me...</p>
                </div>
            </div>
            <audio src={music} autoPlay loop style={{display: 'none'}}/>
        </div>
    );
}

export default SpaceCat;
