import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CatDetail = () => {
    const { slug } = useParams();
    const [cat, setCat] = useState(null);

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/cat/${slug}/`);
                setCat(response.data);
            } catch (error) {
                console.error('Error fetching cat:', error);
            }
        };
        fetchCat();
    }, [slug]);

    if (!cat) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cat-detail">
            <h2>{cat.title}</h2>
            <img src={cat.photo} alt={cat.title} />
            <p>{cat.content}</p>
            <p>Created: {cat.time_create}</p>
            <p>Updated: {cat.time_update}</p>
            <p>Category: {cat.category}</p>
            <p>Published: {cat.is_published ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default CatDetail;