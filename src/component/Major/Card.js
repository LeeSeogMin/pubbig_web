import React, { useState } from 'react';
import './Major.css';

const Card = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    return (
        <>
            <div className="box btn_shadow ">
                <div className="modal-heading text-center">
                    <h1 onClick={toggleModal}>{props.category}</h1>
                </div>
                <div className="img">
                    <img src={props.image1} alt="" onClick={toggleModal} />
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content d_flex">
                        <div className="modal-img left">
                            <img src={props.image2} alt="그림" />
                        </div>
                        <div className="modal-text right">
                            <h1>{props.title}</h1>
                            <p>{props.desc_one}</p>
                            <p>{props.desc_two}</p>
                            <div className="button f_flex mtop">
                                <button className="btn_shadow">
                                    관심있어요 <i class="far fa-thumbs-up"></i>
                                </button>
                                <button className="btn_shadow">
                                    관심없어요
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <button
                                className="close-modal btn_shadow"
                                onClick={toggleModal}
                            >
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
