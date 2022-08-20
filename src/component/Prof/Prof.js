import React from 'react';
import './Prof.css';
import p1 from '../pic/sch.png';
import p2 from '../pic/sch_2.jpg';
import p3 from '../pic/lee.png';
import p4 from '../pic/lm_2.jpg';
import p5 from '../pic/yg.jpg';
import p6 from '../pic/yg_2.jpg';
import p7 from '../pic/jm.png';
import p8 from '../pic/pp1.png';
import p9 from '../pic/k.png';
import p10 from '../pic/pp2.png';

const Prof = () => {
    return (
        <section className="prof">
            <div className="top box1 text-center">
                <h2>여러분과 함께 하는</h2>
                <br />
                <h1>교수진 소개</h1>
            </div>

            <div className="box2 h_btn_shadow ">
                <img src={p1} height="300" width="300" alt="" />
            </div>

            <div className="box3 h_btn_shadow ">
                <h3 className="text-center">노승철 교수(학부장)</h3>
                <br />
                <h3> 연구분야</h3>
                <h4>도시계획, 공공빅데이터분석, 공간정보분석, 도시정보학</h4>
                <br />
                <h3>학력</h3>
                <h4>
                    서울대학교 환경대학원 환경계획학과 박사
                    <br />
                    서울대학교 환경대학원 환경계획학과 석사
                    <br />
                    중앙대학교 공과대학 건축학과 학사
                </h4>
                <br />
                <h3>경력</h3>
                <h4>
                    한국부동산분석학회 교육연구위원회 이사(2017.01~현재)·
                    한국주택학회, 이사(2019.01~현재), 서울연구원 도시정보실
                    빅데이터분석팀장, 한양대 도시부동산빅데이터 겸임교수
                </h4>
            </div>

            <div className="box4 h_btn_shadow ">
                <img src={p2} height="1200" width="700" alt="" />
            </div>

            <div className="box5 h_btn_shadow ">
                <img src={p3} height="300" width="300" alt="" />
            </div>

            <div className="box6 h_btn_shadow ">
                <h3 className="text-center">이석민 교수</h3>
                <br />
                <h3> 연구분야</h3>
                <h4>
                    정책분석, 사회실험평가, 계량경제학, 과학기술정책,
                    데이터분석, 인공지능 프로그래밍 등
                </h4>
                <br />
                <h3>학력</h3>
                <h4>
                    서울대학교 정치학 박사(과학기술정책)
                    <br />
                    서울대학교 정치학 석사(정치학)
                    <br />
                    서울대학교 문학사(인류학)
                </h4>
                <br />
                <h3>경력</h3>
                <h4>
                    서울시 안심소득 평가자문위원회 위원(2021.10~현재), 통계청
                    자체평가위원회 위원(2021.01~현재), 지방공기업 경영평가
                    위원(2019.01~현재)
                </h4>
            </div>

            <div className="box7 h_btn_shadow ">
                <img src={p4} height="1200" width="700" alt="" />
            </div>

            <div className="box8 h_btn_shadow ">
                <img src={p5} height="300" width="300" alt="" />
            </div>

            <div className="box9 h_btn_shadow ">
                <h3 className="text-center">윤건 교수</h3>
                <br />
                <h3> 연구분야</h3>
                <h4>
                    인공지능정부, 데이터기반행정, 데이터기반 조직 및 인사관리,
                    정보통신정책, 사회통합정책, 재난안전정책
                </h4>
                <br />
                <h3>학력</h3>
                <h4>
                    서울대학교 행정대학원 박사(행정학)
                    <br />
                    서울대학교 행정대학원 석사(행정학)
                    <br />
                    고려대학교 행정학과 학사
                </h4>
                <br />
                <h3>경력</h3>
                <h4>
                    한국행정학회 교육취업위원회 이사(2021.01~현재),
                    한국지역정보화학회 연구위원회 위원(2021.01~현재),
                    한국조직학회 편집이사(2020.01~현재), 통계청 통계사무
                    위탁심의위원(2020.09~현재), 인천광역시 데이터기반행정위원회
                    위원(2021.04.29.~현재)
                </h4>
            </div>

            <div className="box10 h_btn_shadow ">
                <img src={p6} height="1200" width="700" alt="" />
            </div>

            <div className="box11 h_btn_shadow ">
                <img src={p7} height="300" width="300" alt="" />
            </div>

            <div className="box12 h_btn_shadow ">
                <h3 className="text-center">김정민 초빙교수</h3>
                <br />
                <h3> 연구분야</h3>
                <h4>공공경제학, 재무행정, 공기업</h4>
                <br />
                <h3>학력</h3>
                <h4>
                    미국 뉴욕주립대학교 경제학 박사
                    <br />
                    미국 뉴욕주립대학교 경제학 석사
                    <br />
                    성균관대학교 경제학과 학사
                </h4>
                <br />
                <h3>경력</h3>
                <h4>
                    제24회 행정고등고시 합격, 공공기관운영(위)위원(대통령임명),
                    (주)IBK 신용정보 사장, 국무조정실 세종특별자치시
                    지원단장(1급), 기획재정부 재정관리협력관(2급),
                    세계은행(IBRD) 선임공공정책관
                </h4>
            </div>

            <div className="box13 h_btn_shadow ">
                <img src={p8} height="300" width="300" alt="" />
            </div>

            <div className="box14 h_btn_shadow ">
                <img src={p9} height="300" width="300" alt="" />
            </div>

            <div className="box15 h_btn_shadow ">
                <h3 className="text-center">강현 초빙교수</h3>
                <br />
                <h3> 연구분야</h3>
                <h4>헌법, 행정법, 형사법 등</h4>
                <br />
                <h3>학력</h3>
                <h4>
                    강원대학교 법학전문대학원
                    <br />
                    서울대학교 행정대학원 행정학 석사
                    <br />
                    고려대학교 행정학사/교육학사
                </h4>
                <br />
                <h3>경력</h3>
                <h4>
                    법무법인 굿플랜 대표변호사, 대법원 국선변호인, 사단법인
                    한국유전자사업자협회 감사, 서울시 소프트테니스협회
                    스포츠공정위원회 부위원장
                </h4>
            </div>
            <div className="box16 h_btn_shadow ">
                <img src={p10} height="300" width="300" alt="" />
            </div>
        </section>
    );
};

export default Prof;
