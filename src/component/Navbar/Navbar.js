import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';
import './Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <NavLink to={url} activeClassName="active">
                    {title}
                </NavLink>
            </li>
        );
    });

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav>
            <div className="logo">한신대<br/>공공인재빅데이터융합학부</div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'menu-list open' : 'menu-list'}>
                {menuList}
            </ul>
        </nav>
    );
};

export default Navbar;