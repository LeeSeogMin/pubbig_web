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

		const majorItems = majorRef.current.querySelectorAll('.major-item');
		majorItems.forEach((item) => observer.observe(item));

		return () => {
			majorItems.forEach((item) => observer.unobserve(item));
		};
	}, []);

	return (
		<div className="major-container" ref={majorRef}>
			<div className="major-grid">
				<div className="major-item">
					<h2>전공 1</h2>
					<p>전공 1에 대한 설명...</p>
				</div>
				<div className="major-item">
					<h2>전공 2</h2>
					<p>전공 2에 대한 설명...</p>
				</div>
				{/* 필요한 만큼 major-item을 추가하세요 */}
			</div>
		</div>
	);
};

export default Major;
