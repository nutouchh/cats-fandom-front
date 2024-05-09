import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const HomePage = () => {
    const [cats, setCats] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchData();
    }, [currentPage]); // Fetch data when currentPage changes

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/v1/cat/?is_published=true`);
            const publishedCats = response.data.filter(cat => cat.is_published); // Filter out unpublished cats
            const startIndex = (currentPage - 1) * 9; // Calculate start index for current page
            const endIndex = startIndex + 9; // Calculate end index for current page
            const pageCats = publishedCats.slice(startIndex, endIndex); // Get cats for current page
            setCats(pageCats);
            setTotalPages(Math.ceil(publishedCats.length / 9)); // Calculate total pages
        } catch (error) {
            console.log(error);
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

    return (
        <div className="App">
            <div className="card-container">
                {cats.map(cat => (
                    <Link key={cat.id} to={`/cat/${cat.slug}`} className="card-link">
                        <div key={cat.id} className="card" style={{backgroundImage: `url(${cat.photo})`}}>
                            <h2 className="title">{cat.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="pagination">
                {currentPage > 1 && <button onClick={handlePrevPage} className="prev-button">Previous</button>}
                {currentPage < totalPages && <button onClick={handleNextPage} className="next-button">Next</button>}
            </div>
        </div>
    );
};

export default HomePage;