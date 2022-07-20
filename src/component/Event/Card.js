import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="box btn_shadow">
                <img src={props.image} alt="" />
                <h2 className="text-center">{props.title}</h2>
                <h3>{props.desc}</h3>
                <a href={props.more} target="_blank" rel="noreferrer">
                    <br />
                    <p>more</p>
                </a>
            </div>
        </>
    );
};

export default Card;
