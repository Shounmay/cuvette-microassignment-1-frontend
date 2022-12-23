import React from 'react';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import Filter from '../../components/Filter/Filter';
import Category from '../../components/Category/Category';
import Button from '../../components/Button/Button';

import styles from './Home.module.css';
const Home = () => {
	return (
		<div className={styles.container}>
			<GalleryCard />
			<Button />
			<Filter />
			<Category />
		</div>
	);
};

export default Home;
