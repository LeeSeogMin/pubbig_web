import React, { useState } from 'react';
import './header.css';

const Header = () => {
    // fixed Header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        header.classList.toggle('active', window.scrollY > 100);
    });
    // Toogle Menu
    const [Mobile, setMobile] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="hlogo">한신대 공공인재빅데이터융합학부</div>

                    <div className="navlink">
                        <ul
                            className={
                                Mobile
                                    ? 'nav-links-mobile'
                                    : 'link f_flex uppercase'
                            }
                            onClick={() => setMobile(false)}
                        >
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a href="/">홈</a>
                            </li>
                            <li>
                                <a href="/component/Major/Major">전공</a>
                            </li>
                            <li>
                                <a href="/component/Prof/Prof">교수진</a>
                            </li>
                            <li>
                                <a href="/component/Academy/Academy">
                                    학회/사회진출
                                </a>
                            </li>
                            <li>
                                <a href="/component/Lab/Lab">학부연구실</a>
                            </li>
                            <li>
                                <a href="/component/Capston/Capston">
                                    캡스톤디자인
                                </a>
                            </li>
                            <li>
                                <a href="/component/Event/Event">학부소식</a>
                            </li>
                            <li>
                                <a href="/component/Contact/Contact">
                                    문의하기
                                </a>
                            </li>
                        </ul>
                        <button
                            className="toggle"
                            onClick={() => setMobile(!Mobile)}
                        >
                            {Mobile ? (
                                <i className="fas fa-times close home-btn"></i>
                            ) : (
                                <i className="fas fa-bars open"></i>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
