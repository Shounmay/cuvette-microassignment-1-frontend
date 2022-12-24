import axios from 'axios';

export async function getCategories() {
	const reqUrl = `https://shuffle-images.onrender.com/api/get-all-categories`;
	const result = await axios.get(reqUrl);
	if (result.data) {
		return result.data;
	}
}
