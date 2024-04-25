const url = 'https://api.themoviedb.org/3';
const api_key = import.meta.env.VITE_API_KEY;
const language = 'language=es-ES';

export const getData = async (typeOfList, timeTend, listOf) => {
	if (typeOfList === 'top_rated') {
		try {
			const response = await fetch(`${url}/${listOf}/${typeOfList}?api_key=${api_key}&${language}`);
			if (!response.ok) {
				throw new Error('HTTP: ' + response.status);
			}
			const data = await response.json();
			return data.results;
		} catch (error) {
			console.error(error);
			return [];
		}
	}

	if (typeOfList === 'trending') {
		try {
			const response = await fetch(`${url}/${typeOfList}/all/${timeTend}?api_key=${api_key}&${language}`);
			if (!response.ok) {
				throw new Error('HTTP: ' + response.status);
			}

			const data = await response.json();
			return data.results;
		} catch (error) {
			console.error(error);
			return [];
		}
	}
};

export const getDetails = async (id, media_type) => {
	try {
		const response1 = await fetch(`${url}/${media_type}/${id}?api_key=${api_key}&${language}`);

		if (!response1) {
			throw new Error('HTTP: ' + response1.status);
		}
		const result = await response1.json();

		const data = [result];

		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getVideos = async (id, media_type) => {
	try {
		const response = await fetch(`${url}/${media_type}/${id}/videos?api_key=${api_key}&language=en-US`);

		if (!response) {
			throw new Error('HTTP: ' + response.status);
		}

		const result = await response.json();

		const data = result.results;

		const infoVideo = data.find((info) => info.type === 'Trailer');

		if (infoVideo) {
			const dataVideo = [infoVideo];
			return dataVideo;
		}
		if (infoVideo !== undefined) {
			const dataVideo = [data[0]];
			return dataVideo;
		} else {
			const dataVideo = [{ type: 'SinVideo' }];
			return dataVideo;
		}
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getCast = async (id, media_type) => {
	try {
		const response = await fetch(`${url}/${media_type}/${id}/credits?api_key=${api_key}&${language}`);

		if (!response) {
			throw new Error('HTTP: ' + response.status);
		}

		const result = await response.json();

		const data = [result.cast];

		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getDataContent = async (typeOfList, genre, page) => {
	const allMovies = [];
	try {
		const response = await fetch(
			`${url}/discover/${typeOfList}?api_key=${api_key}&${language}&with_genres=${genre}&page=${page}`
		);
		if (!response.ok) {
			throw new Error('HTTP: ' + response.status);
		}
		const data = await response.json();
		allMovies.push(...data.results);

		return allMovies;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getGenres = async (typeOfList) => {
	try {
		const response = await fetch(`${url}/genre/${typeOfList}/list?api_key=${api_key}&${language}`);

		if (!response.ok) {
			throw new Error('HTTP: ' + response.status);
		}
		const data = await response.json();

		return data.genres;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getDataCombined = async (id) => {
	try {
		const response = await fetch(`${url}/person/${id}/combined_credits?api_key=${api_key}&language=${language}`);
		if (!response.ok) {
			throw new Error('HTTP: ' + response.status);
		}
		const data = await response.json();

		return data.cast;
	} catch (error) {
		console.error(error);
	}
};

export const getDataSearch = async (query) => {
	try {
		const response = await fetch(`${url}/search/multi?query=${query}&api_key=${api_key}`);
		if (!response.ok) {
			throw new Error('HTTP: ' + response.status);
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getImages = async (id, media_type) => {
	try {
		const response = await fetch(`${url}/${media_type}/${id}/images?api_key=${api_key}&include_image_language=es,en`);
		if (!response.ok) {
			throw new Error('HTTP: ' + response.status);
		}
		const data = await response.json();
		return [data.posters, data.backdrops];
	} catch (error) {
		console.error(error);
		return [];
	}
};
