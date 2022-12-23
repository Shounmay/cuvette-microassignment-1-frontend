import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {
	return (
		<div className={styles.filter}>
			<select>
				<option value='' selected disabled style={{ color: 'gray' }}>
					Filter
				</option>
				<option name='sortByDate' value='asc'>
					Sort by Created Date(asc)
				</option>
				<option name='sortByDate' value='desc'>
					Sort by Created Date(desc)
				</option>
				<option name='sortByFilter' value='like'>
					Filter by like
				</option>
			</select>
		</div>
	);
};

export default Filter;
