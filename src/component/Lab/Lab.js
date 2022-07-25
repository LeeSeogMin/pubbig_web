import React from 'react';
import './Lab.css';
import Card from './Card';
import data from './LabApi';

const Lab = () => {
    return (
        <>
            <section className="lab">
                <div className="container top">
                    <div className="heading" id="lab">
                        <h1 className="text-center">학부 연구실</h1>
                        <h4>
                            공빅학부는 각 전공별로 실습을 위한 연구실이 별도로
                            마련되어 재학생의 연구를 지원하고 있습니다.
                        </h4>
                    </div>

                    <div className="top modal-grid">
                        {data.map((value, index) => {
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

export default Lab;
