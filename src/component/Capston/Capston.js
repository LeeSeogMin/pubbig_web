import React from 'react';
import '../Portfolio/Portfolio.css';
import '../Capston/Capston.css';
import Card from './Card';
import BlogApi from './BlogApi';

const Capston = () => {
    return (
        <>
            <section className="Portfolio Capston" id="Capston">
                <div className="container top">
                    <div className="heading text-center">
                        <h1>캡스톤디자인</h1>
                        <h4>
                            강의실 밖 현장에서 지도교수 그리고 현장 실무자와
                            함께 실무역량을 배양합니다
                        </h4>
                    </div>

                    <div className="content modal-grid">
                        {BlogApi.map((value, index) => {
                            return (
                                <Card
                                    key={index}
                                    image1={value.image1}
                                    image2={value.image2}
                                    category={value.category}
                                    title_one={value.title_one}
                                    totalLike={value.totalLike}
                                    desc_one={value.desc_one}
                                    desc_two={value.desc_two}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Capston;
