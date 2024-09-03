import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <NavLink to={url} activeClassName={styles.active}>
                    {title}
                </NavLink>
            </li>
        );
    });

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>한신대 공공인재빅데이터융합학부</div>
            <div className={styles.menuIcon} onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={`${styles.menuList} ${clicked ? '' : styles.close}`}>
                {menuList}
            </ul>
        </nav>
    );
};

export default Navbar;