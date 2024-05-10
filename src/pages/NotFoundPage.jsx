import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import {Container} from "react-bootstrap";


const NotFoundPage = () => {
    return (
        <Container style={{position: "relative", height: "100vh", backgroundColor: "none"}}>
            {/*<ParticlesComponent style={{position: "absolute", top: 0, left: 0, zIndex: -1}} id="particles"/>*/}
            {/*<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>*/}
            <div>

            УПС!<br/>Такой страницы не существует<br/><br/>

            <Button><Link to="/">Вернуться на главную страницу</Link></Button>
        </div>
        </Container>
    );
};

export default NotFoundPage;
