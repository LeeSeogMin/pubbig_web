import React from 'react';
import './Features.css';
import data from './Features-Api';
import Card from './Card';

const Event = () => {
    return (
        <>
            <section className="features">
                <div className="container top">
                    <div className="heading">
                        <h1 className="text-center">공빅학부 안내와 소식</h1>
                    </div>

                    <div className="content modal-grid">
                        {data.map((val, index) => {
                            return (
                                <Card
                                    key={index}
                                    image={val.image}
                                    title={val.title}
                                    desc={val.desc}
                                    more={val.more}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Event;