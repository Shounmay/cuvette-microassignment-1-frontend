import React, { useState, useEffect } from 'react';
import styles from './GalleryCard.module.css';

const GalleryCard = () => {
	const [galleryList, setGalleryList] = useState([
		{
			url: 'https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
			isLikes: false,
			name: 'Image',
		},
	]);
	return (
		<div className={styles.imageGrid}>
			{galleryList.map((image) => (
				<div>
					<img className={styles.imageCard} src={image.url} alt='' />
				</div>
			))}
		</div>
	);
};

export default GalleryCard;
