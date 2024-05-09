import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserArticles from "../components/profile/UserArticles";
import {Link, Route} from "react-router-dom";

const UserProfilePage = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/v1/auth/users/info');
                setUserData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }
    // const redirectToAdmin = () => {
    //     window.location.href = '/admin'; // Перенаправление пользователя на панель администратора Django
    //     return null;
    // };
    // const adminLink = userData.is_staff ? <a href="/admin">Admin</a> : null;

    return (
        <div>
            <h2>User Profile</h2>
            <p>Email: {userData.email}</p>а
            <p>Username: {userData.username}</p>
            <p>Date Joined: {formatDate(userData.date_joined)}</p>
            {/*{adminLink}*/}
            <Link to="/createcat">Предложить новую статью</Link>
            <UserArticles username={userData.username} isStaff={userData.is_staff}/>
        </div>
    );
};

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}
export default UserProfilePage;
