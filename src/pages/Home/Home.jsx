import React from 'react';
import GalleryCard from '../../components/GalleryCard/GalleryCard';

import Category from '../../components/Category/Category';
import Button from '../../components/Button/Button';

import styles from './Home.module.css';
const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<Category />
				<GalleryCard />
			</div>
			<Button />
		</div>
	);
};

export default Home;
