import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "./login/LoginActions";
import './style/Header.css';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);

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

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className='header'>
            <Navbar className='nav-links'>
                <Navbar.Collapse >
                    <Nav className='nav-links'>
                        <ul>
                            <li><Link to="/"><b>C A T S     F A N D O M</b>               </Link></li>
                            <li><Link to="/quiz"> | Квиз</Link></li>
                            <li className="dropdown-wrapper">
                                <span onClick={toggleDropdown} style={{cursor: 'pointer'}}> | Игры</span>
                                {/* Компонент выпадающего меню */}
                                {isDropdownOpen && (
                                    <div className="dropdown-menu" >
                                        <ul>
                                            <li><Link to="/music"> * Котомузыка</Link></li>
                                            <li><Link to="/runaway"> * Поймай кота</Link></li>
                                            <li><Link to="/space"> * Космическое приключение</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            {isAuthenticated ? (
                                <li>

                                    <Link to="/login" onClick={handleLogout}> | Выход</Link>
                                    <Link to="/profile"> ---> ЛК: <b>{user.username}</b></Link>
                                    {/*<span> ---> пользователь: <b>{user.username}</b></span>*/}
                                </li>
                            ) : (
                                <li><Link to="/login"> | Войти</Link></li>
                            )}
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
