import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Filter from '../../components/Filter/Filter';

import styles from './Category.module.css';

const Category = () => {
	const navigate = useNavigate();

	const [categoryList, setCategoryList] = useState([
		{ name: 'Wildlife' },
		{ name: 'Landscape' },
		{ name: 'Cars' },
		{ name: 'Mountain' },
	]);

	function navigateCategory(categoryName) {
		navigate(`/${categoryName}`);
	}

	return (
		<div className={styles.containerWrapper}>
			<>
				{categoryList.map((category) => (
					<div
						onClick={() => navigateCategory(category.name)}
						className={styles.category}
					>
						{category.name}
					</div>
				))}
			</>

			<div className={styles.filterContainer}>
				<Filter />
			</div>
		</div>
	);
};

export default Category;
