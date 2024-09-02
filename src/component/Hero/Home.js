import React from 'react';
import './Home.css';
import home1 from '../pic/ncs.png';
import home2 from '../pic/pp1.jpg';
import home3 from '../pic/pp2.jpg';
import home4 from '../pic/major1.jpg';
import home5 from '../pic/major2.jpg';
import home6 from '../pic/major3.jpg';
import home7 from '../pic/pp3.png';

const InfoBox = ({ title, content, image }) => (
  <div className="box info-box">
    <h2>{title}</h2>
    {image && <img src={image} alt={title} />}
    <p>{content}</p>
  </div>
);

const VideoBox = ({ src }) => (
  <div className="box video-box">
    <iframe
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

const LinkBox = ({ links }) => (
  <div className="box link-box">
    <div className="btn_shadow">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noreferrer">
          {link.text}
        </a>
      ))}
    </div>
  </div>
);

const Home = () => {
  return (
    <section className="home">
      <div className="box box1">
        <h1>
          한신 <i>공!빅!</i> 에서 여러분의 미래를 설계하세요
        </h1>
      </div>

      <InfoBox title="새 시대의 공공인재!" content="" />
      <InfoBox title="문과도 빅데이터 전문가!" content="" />

      <div className="box box4">
        <h2>
          한신 공빅은 전국 최초로 사회과학(공공관리전공)과
          빅데이터(공공빅데이터전공)를 함께 공부할 수 있는 융합학부입니다.
        </h2>
        <h2>
          한신 공빅은 공적정신(public mind)과 AI빅데이터 역량을 기반으로 다양한
          사회문제를 융합적으로 사고하고 창의적으로 해결해나가는 미래 인재를
          양성합니다.
        </h2>
      </div>

      <VideoBox src="https://www.youtube.com/embed/_wWfvg5xH2g" />

      <InfoBox
        image={home1}
        content="한신대 공공인재빅데이터융합학부장 노승철입니다. 우리 한신 공빅은 새로운 시대에 요구하는 융합인재를 위해 탄생한 학부입니다. 한신 공빅의 체계적인 교육과정과 입체적인 지원을 통해 여러분은 4차산업혁명 시대의 과학행정을 이끌어갈 공공인재로, 융합역량을 새로운 사회적 가치로 만드는 빅데이터 전문가가 될 수 있습니다."
      />

      <div className="box box8">
        <h1>
          새로운 세상에 맞는 공공의 인재가 되고 싶다면, 융합교육을 통해
          AI빅데이터시대 인재가 되고 싶다면 한신 공빅학부에서 그 기회를
          잡으세요. 여러분을 기다리고 있습니다.
        </h1>
      </div>

      <LinkBox
        links={[
          { url: "https://www.hs.ac.kr/sites/kor/files/2021_31_jungong_gonggonginjae.pdf", text: "학과 소개(pdf)" },
          { url: "https://www.hs.ac.kr/sites/kor/contents/sogae_gonggonginjaehakbu.pdf", text: "학과 소개(PPT)" },
          { url: "https://www.youtube.com/watch?v=PFPOznXIFl0&amp;t=32s", text: "학과 소개(영상)" },
          { url: "https://www.hs.ac.kr/kor/10671/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa29yJTJGMjIxNSUyRjEzMzAyMSUyRmFydGNsVmlldy5kbyUzRnBhZ2UlM0QxJTI2c3JjaENvbHVtbiUzRCUyNnNyY2hXcmQlM0QlMjZiYnNDbFNlcSUzRCUyNmJic09wZW5XcmRTZXElM0QlMjZyZ3NCZ25kZVN0ciUzRCUyNnJnc0VuZGRlU3RyJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2cGFzc3dvcmQlM0QlMjY%3D", text: "반갑다 학과야" }
        ]}
      />

      <InfoBox
        title="Why 공빅?"
        image={home2}
        content="한신 공빅학부는 2021년 첫 신입생이 입학한 신설학부입니다. 신설학부가 왜 만들어졌을까요? 미래 사회가 필요로 하기 때문입니다."
      />

      <InfoBox
        title="How 공빅?"
        image={home3}
        content="한신 공빅학부의 두 전공은 미래 인재를 위한 교육과정으로 채워져 있습니다. 2개의 실습실, 3개의 전공소학회, 2개의 사회진출준비반 등을 통해 여러분들을 입체적으로 체계적으로 지원하고 있습니다."
      />

      <div className="box box12">
        <h1>한신 공빅학부에서 다양한 진로를 선택하고 준비할 수 있습니다.</h1>
      </div>

      <InfoBox
        image={home4}
        content="첫째: 선후배들과 함께 공무원, 공공기관 시험을 준비할 수 있습니다. 한신대 공빅학부의 공공관리 전공에서 정부, 지방자치단체, 공기업 등 공공기관으로 가기위해 필요한 강의들을 들을 수 있고, 시험 준비반(공시반)에서 선후배들과 함께 시험을 준비할 수 있습니다."
      />

      <InfoBox
        image={home5}
        content="둘째: 문과와 이과 관계없이 모두 빅데이터분석 전문가가 될 수 있습니다. 여러분이 문과든 이과든, 수학에 관심이 없고, 컴퓨터를 잘 몰라도 한신대 공빅학부의 공공빅데이터전공에서 빅데이터분석가로 성장할 수 있습니다. 데이터분석에서 AI까지 폭넓은 교과목과 실습을 통해 누구나 공공기관, 민간기업의 빅데이터분석 전문가가 될 수 있습니다."
      />

      <InfoBox
        image={home6}
        content="셋째: 복수전공을 통해 새로운 세상이 원하는 융합인재가 될 수 있습니다. 공공관리전공에서 공공문제 해결 역량을 기르고, 공공빅데이터전공에서 빅데이터분석역량을 함께 갖추어, 여러분은 공무원, 공기업, 시민단체 등 공공분야는 물론 민간 기업으로 취업할 수도 있고, 창업을 통해 새로운 가치를 만들 수 있습니다."
      />

      <div className="box box19">
        <h1>
          새로운 세상에 적합한 공공영역의 미래인재가 되기를 원하신다면 융합교육을
          통해 AI빅데이터시대 리더가 되고 싶다면 한신 공빅학부에서 그 기회를
          잡으세요. 여러분을 기다리고 있습니다.
        </h1>
        <img src={home7} alt="Sun" className="sun" />
      </div>
    </section>
  );
};

export default Home;