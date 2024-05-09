import React from 'react';
import {Link} from "react-router-dom";

const AddCatSuccessPage = () => {
    return (
        <div>
            <h2>Статья добавлена успешно!</h2>
            <div>
                <Link to="/">На главную</Link>
                <Link to="/createcat">Создать еще кота</Link>
            </div>
        </div>
    );
};

export default AddCatSuccessPage;