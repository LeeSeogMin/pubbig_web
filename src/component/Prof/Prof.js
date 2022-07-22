import React from 'react';
import './Testimonial.css';
import Slide from './Slide';
import data from './ProfApi';

const Prof = () => {
    return (
        <>
            <section className="Testimonial" id="Testimonial">
                <div className="container">
                    <div className="heading text-center">
                        <h4>여러분과 함께 하는</h4>
                        <h1 className="tfont">교수진 소개</h1>
                    </div>
                    <div className="content">
                        {data.map((val, index) => {
                            return (
                                <Slide
                                    key={index}
                                    image={val.image}
                                    name={val.name}
                                    research={val.research}
                                    education1={val.education1}
                                    education2={val.education2}
                                    education3={val.education3}
                                    activity={val.activity}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Prof;
