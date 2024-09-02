import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="hero-container">
            <h1>공공인재빅데이터융합학부</h1>
            <p>한신대학교 공공인재빅데이터융합학부에 오신 것을 환영합니다!</p>
            <div className="hero-btns">
                <button className="btn">자세히 보기</button>
                <button className="btn btn-outline">문의하기</button>
            </div>
        </div>
    );
}

export default Home;
