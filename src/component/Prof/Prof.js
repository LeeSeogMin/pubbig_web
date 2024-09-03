import React from 'react';
import './Prof.css';

const Prof = () => {
    const professors = [
        {
            name: "노승철",
            title: "학부장",
            description: "노승철 교수는 ... (교수 소개 내용)",
            image: "노승철교수님.jpg" // 이미지 경로를 적절히 수정해주세요
        },
        {
            name: "김상민",
            title: "교수",
            description: "김상민 교수는 ... (교수 소개 내용)",
            image: "김상민교수님.jpg"
        },
        // 나머지 3명의 교수 정보도 같은 형식으로 추가해주세요
    ];

    return (
        <div className="prof-container">
            <h1 className="prof-title">교수 소개</h1>
            <div className="prof-grid">
                {professors.map((prof, index) => (
                    <div key={index} className="prof-box">
                        <img src={prof.image} alt={prof.name} className="prof-image" />
                        <h2>{prof.name} {prof.title}</h2>
                        <p>{prof.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prof;
