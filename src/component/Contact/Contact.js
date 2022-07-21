import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        alert(
            `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
        );
    };
    return (
        <>
            <section className="Contact" id="contact">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>CONTACT</h4>
                        <h1>궁금한 사항을 물어보세요</h1>
                    </div>

                    <div className="content d_flex">
                        <div className="left">
                            <div className="box box_shodow">
                                <div className="details">
                                    <h1>공공인재빅데이터융합학부</h1>
                                    <p>
                                        입학과 관련된 궁금한 사항은 아래의
                                        연락처로 문의하시면 학부 교수님들이 직접
                                        상담해드립니다.
                                    </p>{' '}
                                    <br />
                                    <p>Phone: 010-9973-5660</p>
                                    <p>Email: nsc5660@hs.ac.kr</p> <br />
                                    <span>FIND WITH US</span>
                                    <div className="button f_flex">
                                        <button className="btn_shadow">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                        <button className="btn_shadow">
                                            <i className="fab fa-instagram"></i>
                                        </button>
                                        <button className="btn_shadow">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right box_shodow">
                            <form onSubmit={formSubmit}>
                                <div className="f_flex">
                                    <div className="input row">
                                        <span>YOUR NAME</span>
                                        <input
                                            type="text"
                                            name="fullname"
                                            value={data.fullname}
                                            onChange={InputEvent}
                                        />
                                    </div>
                                    <div className="input row">
                                        <span>PHONE NUMBER </span>
                                        <input
                                            type="number"
                                            name="phone"
                                            value={data.phone}
                                            onChange={InputEvent}
                                        />
                                    </div>
                                </div>
                                <div className="input">
                                    <span>EMAIL </span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                    />
                                </div>
                                <div className="input">
                                    <span>SUBJECT </span>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={data.subject}
                                        onChange={InputEvent}
                                    />
                                </div>
                                <div className="input">
                                    <span>YOUR MESSAGE </span>
                                    <textarea
                                        cols="30"
                                        rows="10"
                                        name="message"
                                        value={data.message}
                                        onChange={InputEvent}
                                    ></textarea>
                                </div>
                                <button className="btn_shadow">
                                    SEND MESSAGE{' '}
                                    <i className="fa fa-long-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
