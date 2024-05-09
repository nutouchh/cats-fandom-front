import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const UpdateCatForm = () => {
    const [catData, setCatData] = useState(null);
    const { slug } = useParams();
    useEffect(() => {
        const fetchCat = async () => {
            try {
                // console.log("Slug:", slug);
                const response = await axios.get(`/api/v1/cat/${slug}/`);
                setCatData(response.data);
            } catch (error) {
                console.error('Error fetching cat:', error);
            }
        };
        fetchCat();

    }, [slug]) ;

    const handleChange = (e) => {
        setCatData({ ...catData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/v1/cat/${slug}/`, catData);
            console.log(response.data);
            // Обновление списка котов или другие действия после успешного обновления
        } catch (error) {
            console.error('Error updating cat:', error);
        }
    };

    if (!catData) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={catData.title} onChange={handleChange} />
            <textarea name="content" value={catData.content} onChange={handleChange} />
            <input type="text" name="category" value={catData.category} onChange={handleChange} />
            <input type="number" name="born_year" value={catData.born_year} onChange={handleChange} />
            <button type="submit">Update Cat</button>
        </form>
    );
};

export default UpdateCatForm;
