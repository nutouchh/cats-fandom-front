import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Typography} from 'antd';
import Title from "antd/es/skeleton/Title";

const { Text } = Typography;

const NotFoundPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            УПС!<br/>Такой страницы не существует<br/><br/>
            <Button><Link to="/">Вернуться на главную страницу</Link></Button>
        </div>
    );
};

export default NotFoundPage;
