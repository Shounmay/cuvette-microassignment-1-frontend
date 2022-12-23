import React from 'react';
import styles from './Button.module.css';

const Button = () => {
	return (
		<div className={styles.buttonContainer}>
			<button className={styles.shuffleButton}>Shuffle</button>
		</div>
	);
};

export default Button;
