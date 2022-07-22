import React from 'react';
import './Home.css';
import hero from '../pic/logo3.png';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
        <>
            <section>
                <div className="h_btn_shadow top">
                    <div className="d_flex">
                        <a
                            href="https://cafe.naver.com/freesiaforum?iframe_url=/MyCafeIntro.nhn%3Fclubid=30421471"
                            target="_blank"
                            rel="noreferrer"
                        >
                            학생회
                        </a>
                        <a
                            href="https://www.hs.ac.kr/kor/10501/subview.do"
                            target="_blank"
                            rel="noreferrer"
                        >
                            공빅학부 자료
                        </a>

                        <a
                            href="https://www.hs.ac.kr/kor/index..do"
                            target="_blank"
                            rel="noreferrer"
                        >
                            한신대학교
                        </a>
                    </div>
                </div>
            </section>
            <section className="hero" id="home">
                <div className="container f_flex top">
                    <div className="left top">
                        <h3>한신 공공인재빅데이터융합학부(공빅)에서</h3>
                        <h2>여러분의 미래를 설계하세요!</h2>
                        <h2>
                            <span>
                                <Typewriter
                                    words={[
                                        ' 정부를 운영하는 행정공무원 !!',
                                        ' 인문사회계 빅데이터전문가 !!',
                                    ]}
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>

                        <p>
                            한신 공빅학부는 전국 최초로 사회과학(행정학)에
                            데이터과학(빅데이터분석)을 도입한 융복합학부로서
                            아래와 같은 공빅만의 특성화가 있습니다.
                            <br />
                        </p>
                        <p>
                            첫째: 공무원을 지망하는 학생을 위한 전공과목 개설 및
                            <b>공시반을 운영</b>하고 있습니다.
                            <br />
                        </p>
                        <p>
                            둘째: <b>문과출신의 빅데이터분석전문가</b>를
                            양성합니다.
                            <br />
                        </p>
                        <p>
                            셋째: 행정학과 빅데이터분석을 복수전공하는 학생들은
                            공기업과 민간기업에 진출할 수 있습니다.
                        </p>
                        <br />

                        <h3>
                            한신 공빅학부는 정부 및 공기업 등 공공기관에
                            진출하기를 원하는 인재, 그리고 인문사회학적 지식을
                            바탕으로 데이터 분석역량을 갖춘 <b>문과출신</b>의
                            데이터분석 전문가 양성을 위해 신설되었습니다.
                        </h3>
                        <br />
                        <h3>
                            <b>수학에 관심이 없어도, 컴퓨터를 잘 몰라도 </b>
                            누구나 데이터에 생명을 불어넣고 가치있는 정보를
                            만드는 융합형 데이터 전문가가 될 수 있습니다. 한신
                            공빅학부는 여러분에게 다양한 가능성을 제공하고자
                            합니다.
                        </h3>
                        <br />
                        <h3>
                            공빅학부에 입학한 학생들은 공적정신과 공공문제 해결
                            역량을 겸비한 공무원, 공기업, 시민단체 등 공공분야로
                            진출하거나 융합적 사고와 빅데이터분석 역량을
                            바탕으로 공기업과 민간기업의 데이터분석가로 진출할
                            수 있습니다.
                        </h3>
                        <br />
                        <h3>
                            AI빅데이터시대에 공빅학부에서 새로운 융합형 인재가
                            되는 기회를 잡으세요. 한신 공빅학부가 여러분을
                            기다리고 있습니다.
                        </h3>
                    </div>
                    <div className="right">
                        <div className="right_img">
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
