import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import {Container} from "react-bootstrap";

const { Title } = Typography;

const AddCatSuccessPage = () => {
    return (
        <Container style={{position: "relative", height: "100vh", backgroundColor: "none"}}>
            {/*<ParticlesComponent style={{position: "absolute", top: 0, left: 0, zIndex: -1}} id="particles"/>*/}
            {/*<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>*/}
            <div>
                <Title level={2}>Успех!<br/>Статья отправлена на модерацию!</Title>
                <div style={{ marginTop: '16px' }}>
                    <Button  style={{ marginRight: '8px' }}><Link to="/">На главную</Link></Button>
                    <Button><Link to="/createcat">Создать еще кота</Link></Button>
                </div>
            </div>

        </Container>
    );
};

export default AddCatSuccessPage;
