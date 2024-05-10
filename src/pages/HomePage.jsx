import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Row, Col, Button, Input, Card, Spin} from 'antd'; // Добавляем компонент Input из библиотеки Ant Design
import '../App.css';

const HomePage = () => {
    const [cats, setCats] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [noResults, setNoResults] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [currentPage, searchTerm]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/v1/cat/?is_published=true&search=${searchTerm}`);
            const publishedCats = response.data.filter(cat => cat.is_published);
            const startIndex = (currentPage - 1) * 9;
            const endIndex = startIndex + 9;
            const pageCats = publishedCats.slice(startIndex, endIndex);
            setCats(pageCats);
            setTotalPages(Math.ceil(publishedCats.length / 9));

            if (publishedCats.length === 0) {
                setNoResults(true);
            } else {
                setNoResults(false);
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    if (loading) {
        return (
            // <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Spin size="large" />
            // </div>
        )
    }

    return (
        <div>
            <div className="container">
                <br/><br/>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Col span={15}> <Card style={{ background: 'transparent' , border: 'none'}}>
                        <Input placeholder="Найти кота..." onChange={handleSearch} style={{marginBottom: '10px'}}/>
                        {/*<Button onClick={fetchData} style={{marginLeft: '10px'}}>Search</Button>*/}
                    </Card>  </Col>
                </div>
                {noResults ? (
                    <h3 style={{ textAlign: 'center' }}>К сожалению, котомемов по вашему запросу не найдено.</h3>
                ) : (
                <Row gutter={[16, 16]} justify="center">
                    {cats.map(cat => (
                        <Col key={cat.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                            <Link to={`/cat/${cat.slug}`} className="card-link">
                                <div className="square-card" style={{backgroundImage: `url(${cat.photo})`}}>
                                    <h2 className="title">{cat.title}</h2>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>)}
            </div>
            <div className="pagination">
                {currentPage > 1 &&
                    <Button onClick={handlePrevPage} style={{margin: '10px',marginBottom: '20px'}}>Назад</Button>}
                {currentPage < totalPages &&
                    <Button onClick={handleNextPage}  style={{margin: '10px' ,marginBottom: '20px'}}>Дальше</Button>}
            </div>
        </div>
    );
};

export default HomePage;
