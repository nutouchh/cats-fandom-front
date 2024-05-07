import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Функция для открытия/закрытия выпадающего меню
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-wrapper')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className='header'>
            <div className='logo-container'>
                <h1 className='logo-text'>Котостории</h1>
            </div>
            <nav className='nav-links'>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li className="dropdown-wrapper">
                        <span onClick={toggleDropdown} style={{cursor: 'pointer'}}>Игры</span>
                        {/* Компонент выпадающего меню */}
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li><Link to="/music">Котомузыка</Link></li>
                                    <li><Link to="/runaway">Поймай кота</Link></li>
                                    <li><Link to="/space">Космическое приключение</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {/*<li><Link to="/music">Музыка</Link></li>*/}
                    {/*<li><Link to="/runaway">Догонялки</Link></li>*/}
                    <li><Link to="/login">Личный кабинет</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;