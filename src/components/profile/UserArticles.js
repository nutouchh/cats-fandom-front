import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function UserArticles({ username , isStaff } ) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get(`/api/v1/user_cats/${username}/`);
                setArticles(response.data);
                // console.log(articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, [username, articles]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Articles</h1>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Time Created</th>
                    <th>Published Status</th>
                </tr>
                </thead>
                <tbody>
                {articles.map(article => (
                    <tr key={article.id}>
                        {/*<td><Link to={`/updatecat/${article.slug}`} className="card-link">{article.title}</Link></td>*/}
                        <td><Link to={`/cat/${article.slug}`} className="card-link">{article.title}</Link></td>
                        <td>{formatDate(article.time_create)}</td>
                        <td>{article.is_published ? 'Published' : 'Not Published'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
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
