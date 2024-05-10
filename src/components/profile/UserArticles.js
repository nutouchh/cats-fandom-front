import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Table, Typography, Spin, Row, Col, Button} from 'antd';

const { Title } = Typography;

function UserArticles({ username, isStaff }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get(`/api/v1/user_cats/${username}/`);
                setArticles(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, [username]);

    const columns = [
        {
            title: 'Заголовок',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => <Link to={`/cat/${record.slug}`}>{text}</Link>,
        },
        {
            title: 'Дата создания',
            dataIndex: 'time_create',
            key: 'time_create',
            render: (text) => formatDate(text),
        },
        {
            title: 'Статус публикации',
            dataIndex: 'is_published',
            key: 'is_published',
            render: (text) => (text ? 'Опубликовано' : 'Ожидает модерации'),
        },
    ];

    if (loading) {
        return <Spin />;
    }

    return (
        <Row justify="center">
            <Col span={20}>
                <div>
                    <Title level={2}>Твои предложенные статьи</Title>
                    <Table columns={columns} dataSource={articles} rowKey="id" />
                </div>
            </Col>
            <Button>
                <Link to="/createcat">Добавить новую статью</Link>
            </Button> <br/><br/>
        </Row>
    );
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
}

export default UserArticles;
