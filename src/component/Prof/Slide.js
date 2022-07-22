import React from 'react';
import './Testimonial.css';

const Slide = (props) => {
    return (
        <section className="testimonial text-center flex" id="testimonial">
            <div className="modal-img left box btn_shadow">
                <div className="img">
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div className="right box">
                {/* <div className="icon">
                    <div className="quote">
                        <i class="fal fa-quote-right"></i>
                    </div>
                </div> */}

                <div className="modal-text right box btn_shadow">
                    <div>
                        <h2 className="text-center">{props.name}</h2>
                    </div>
                    <div>
                        <h2>
                            <span>연구분야</span>
                        </h2>
                        <p> {props.research}</p>
                    </div>
                    <div>
                        <h2>학력</h2>
                        <p>{props.education1}</p>
                        <p>{props.education2}</p>
                        <p>{props.education3}</p>
                    </div>
                    <div>
                        <h2>경력</h2>
                        <p>{props.activity}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slide;
