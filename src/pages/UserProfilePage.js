import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Typography,Spin} from 'antd';
import UserArticles from '../components/profile/UserArticles';

const { Title, Paragraph } = Typography;

const UserProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [daysSinceJoined, setDaysSinceJoined] = useState(null);
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/v1/auth/users/info');
                setUserData(response.data);
                const dateJoined = new Date(response.data.date_joined);
                const currentDate = new Date();
                const differenceInTime = currentDate.getTime() - dateJoined.getTime();
                const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
                setDaysSinceJoined(differenceInDays);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const toggleTableVisibility = () => {
        setShowTable(!showTable);
    };

    if (!userData || daysSinceJoined === null) {
        return <Spin size="large" />;
    }

    return (
        <div>
            <br/><br/>
            {/*<Title level={2}>Профиль автора:</Title>*/}
            <Title level={3}>Привет, {userData.username}!</Title>
            <Paragraph>Ты с нами уже {daysSinceJoined} дней!</Paragraph>
            {/*<Button>*/}
            {/*    <Link to="/createcat">Добавить новую статью</Link>*/}
            {/*</Button> <br/><br/>*/}
            <Button onClick={toggleTableVisibility}>
                {showTable ? 'Скрыть статьи' : 'Показать статьи'}
            </Button>
            {showTable && <UserArticles username={userData.username} isStaff={userData.is_staff}/>}
        </div>
    );
};

export default UserProfilePage;
