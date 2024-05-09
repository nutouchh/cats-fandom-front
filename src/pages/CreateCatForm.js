import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const CreateCatForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: '',
        photo: null,
        born_year: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhotoChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = new FormData();
        postData.append('title', formData.title);
        postData.append('content', formData.content);
        postData.append('category', formData.category);
        postData.append('photo', formData.photo);
        postData.append('born_year', formData.born_year);

        try {
            const response = await axios.post('/api/v1/cat/', postData);
            console.log(response.data);
            // Обновление списка котов или другие действия после успешного создания
            navigate('/success');
        } catch (error) {
            console.error('Error creating cat:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
            <textarea name="content" value={formData.content} onChange={handleChange} />
            <input type="text" name="category" value={formData.category} onChange={handleChange} />
            <input type="file" onChange={handlePhotoChange} />
            <input type="number" name="born_year" value={formData.born_year} onChange={handleChange} />
            <button type="submit">Create Cat</button>
        </form>
    );
};

export default CreateCatForm;
