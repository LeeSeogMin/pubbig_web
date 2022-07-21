import React from 'react';
import './Major.css';
import Card from './Card';
import data from './Major_data';
import curri from '../pic/curri.png';

const Major = () => {
    return (
        <>
            <section className="major" id="major">
                <div className="container top">
                    <div className="heading">
                        <h1 className="text-center">학부 전공</h1>
                        <ul>
                            <li>
                                <h4>
                                    1. 공빅은 전통적 행정학 기반의 "공공관리
                                    전공"과 AI빅데이터 활용 역량을 배양하는
                                    "공공빅데이터전공"으로 구성된 교육과정을
                                    갖추고 있습니다. <br />
                                </h4>
                            </li>

                            <li>
                                <h4>
                                    2. 문과, 이과 관계없이 공공분야 진출을 위해
                                    공공조직/인사/재정/정책역량과 AI빅데이터분석
                                    역량을 함께 개발할 수 있습니다. <br />
                                </h4>
                            </li>

                            <li>
                                <h4>
                                    3. 인문사회와 빅데이터 융합 교육을 통해
                                    누구나 공무원, 공기업 분야의 미래형 인재와
                                    민간기업의 AI빅데이터 전문가가 될 수
                                    있습니다.
                                </h4>
                            </li>
                        </ul>
                    </div>

                    <div className="content major-modal-grid top">
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
                    <div className="btn_shadow mtop">
                        <div className="modal-heading text-center">
                            <h1>교과목 체계</h1>
                        </div>
                        <div className="img text-center">
                            <img src={curri} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Major;
