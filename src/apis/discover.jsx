import axios from 'axios';

export async function getCategories() {
	const reqUrl = `https://shuffle-images.onrender.com/api/get-all-categories`;
	const result = await axios.get(reqUrl);
	if (result.data) {
		return result.data;
	}
}
export async function getGallery(
	categoryName,
	sortByLike,
	sortByDate,
	shuffle
) {
	const reqUrl = `https://shuffle-images.onrender.com/api/discover/${categoryName}?sortByLike=${sortByLike}&sortByDate=${sortByDate}&shuffle=${shuffle}`;
	const result = await axios.get(reqUrl);
	if (result.data) {
		return result.data;
	}
}
