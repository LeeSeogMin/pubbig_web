import React from 'react';
import logo4 from './pic/logo.jpeg';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="conatiner text-center top">
                    <div className="img">
                        <img src={logo4} alt="" />
                    </div>
                    <p>
                        © 2022. All rights reserved by 공공인재빅데이터융합학부
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
