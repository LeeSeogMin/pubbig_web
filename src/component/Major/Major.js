import React, { useEffect, useRef } from 'react';
import './Major.css';

const Major = () => {
	const majorRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.1 }
		);

		const majorItems = majorRef.current.querySelectorAll('.major-item, .box1, .box2, .box3, .box4, .box5, .box6, .box7');
		majorItems.forEach((item) => observer.observe(item));

		return () => {
			majorItems.forEach((item) => observer.unobserve(item));
		};
	}, []);

	return (
		<div className="major-container" ref={majorRef}>
			<div className="major">
				<div className="box1">
					<h1>전공 소개</h1>
				</div>
				<div className="box2">
					<h2>공공관리전공</h2>
				</div>
				<div className="box3">
					<h1>교과목 구성</h1>
					<h2>공공관리전공 교과목</h2>
				</div>
				<div className="box4">
					{/* 여기에 공공관리전공 교과목 테이블 추가 */}
				</div>
				<div className="box5">
					<h2>공공빅데이터전공</h2>
				</div>
				<div className="box6">
					{/* 여기에 공공빅데이터전공 교과목 테이블 추가 */}
				</div>
				<div className="box7">
					<h1>교과목 구성</h1>
					<h2>공공빅데이터전공 교과목</h2>
				</div>
			</div>
		</div>
	);
};

export default Major;
