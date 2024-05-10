import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography, Spin } from 'antd';

const { Title, Paragraph } = Typography;

const CatDetail = () => {
    const { slug } = useParams();
    const [cat, setCat] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const response = await axios.get(`/api/v1/cat/${slug}/`);
                setCat(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cat:', error);
                setLoading(false);
            }
        };
        fetchCat();
    }, [slug]);

    if (loading) {
        return (
            // <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Spin size="large" />
            // </div>
        )
    }

    if (!cat) {
        return <div>Кот не найден</div>;
    }

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Row justify="center">
                    <Col xs={24} sm={24} md={12}>
                        <img src={cat.photo} alt={cat.title} style={{maxWidth: '100%', height: 'auto'}}/>
                    </Col>
                <Col xs={24} sm={24} md={12}>
                    <div>
                        <Title level={2} style={{ textAlign: 'left' }}>{cat.title}</Title>
                        <Paragraph style={{ textAlign: 'justify' }}>{cat.content}</Paragraph>
                        <Paragraph style={{ textAlign: 'left' }}>Опубликовано: {formatDate(cat.time_create)}</Paragraph>
                    </div>
                </Col>

            </Row>
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
    return `${year}.${month}.${day} ${hours}:${minutes}`;
}
export default CatDetail;
