import React from 'react';
import { Link } from 'react-router-dom';
import './Academy.css';

const Academy = () => {
	const academyItems = [
		{ id: 1, title: '학술제 1', image: '/images/academy1.jpg', link: '/academy/1' },
		{ id: 2, title: '학술제 2', image: '/images/academy2.jpg', link: '/academy/2' },
		// 추가 학술제 항목...
	];

	return (
		<div className="academy-container">
			<h1>학술제</h1>
			<div className="academy-grid">
				{academyItems.map((item) => (
					<Link to={item.link} key={item.id} className="academy-item">
						<img src={item.image} alt={item.title} />
						<div className="academy-item-content">
							<h3>{item.title}</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Academy;
