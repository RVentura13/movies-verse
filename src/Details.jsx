import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getDetails, getImages, getVideos } from './helpers/getData';

import { NavBar } from './components/NavBar';
import { SpecificDetails } from './components/SpecificDetails';
import { Cast } from './components/Cast';
import { ButtonPlay } from './components/ButtonPlay';
import { ImagesContainer } from './components/ImagesContainer';

import { Spinner } from './components/Spinner';

export const Details = () => {
	document.title = 'Movies-Verse | Detalles';
	const [loading, setLoading] = useState(true);
	const [details, setDetails] = useState([]);
	const [videos, setVideos] = useState([]);
	const [posters, setPosters] = useState([]);
	const [backdrops, setBackdrops] = useState([]);

	const { id, media_type } = useParams();

	const handleGetVideo = async () => {
		const newVideos = await getVideos(id, media_type);
		setVideos(newVideos);
	};

	const fetchData = async () => {
		const newDetails = await getDetails(id, media_type);
		setDetails(newDetails);
	};
	const fetchDataImages = async () => {
		setLoading(true); // Muestra el Loading
		const newPosters = await getImages(id, media_type);
		setPosters(newPosters[0]);
		setBackdrops(newPosters[1]);
		setLoading(false); // Ocultar el Loading
	};
	useEffect(() => {
		fetchData();
		fetchDataImages();
		handleGetVideo();
	}, []);

	return (
		<>
			{details.map((detail, index) => (
				<div
					className='relative flex justify-center items-center h-screen'
					key={index}
				>
					<div className='flex items-center justify-center w-full'>
						{detail.backdrop_path !== null && (
							<img
								src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
								alt={detail.title}
								className='w-full opacity-10 object-cover h-screen'
							/>
						)}
						<NavBar className='absolute top-0 w-full' />
						<div className='absolute w-full h-full sm:h-full sm:w-full flex flex-col justify-center items-center bg-gradient-to-b from-transparent from-[0%] to-[#0f172a] to-90% '></div>
					</div>
					<div className='absolute top-40 flex flex-col lg:justify-start lg:items-start justify-center items-center gap-5 lg:gap-5 m-5 lg:m-5 w-[90%] lg:w-[80%] sm:min-w-[450px] min-w-[340px]'>
						<div className='flex flex-col lg:flex lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-20 w-[90%] lg:w-full lg:min-w-full m-auto mb-10'>
							<div className='flex flex-col gap-5'>
								{detail.poster_path === null ? (
									<img
										width={600}
										src='/image-not-found.png'
										alt={detail.title}
										className='rounded-lg'
									/>
								) : (
									<img
										width={600}
										src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
										alt={detail.title}
										className='rounded-lg'
									/>
								)}
								{videos.map((video, index) => (
									<ButtonPlay
										key={index}
										keyVideos={video.key}
										typeVideos={video.type}
										name={detail.name}
										title={detail.title}
									/>
								))}
							</div>
							<div className='flex flex-col gap-1 justify-start items-start w-full overflow-hidden'>
								<SpecificDetails
									key={index}
									title={detail.title}
									name={detail.name}
									vote_average={detail.vote_average}
									release_date={detail.release_date}
									first_air_date={detail.first_air_date}
									runtime={detail.runtime}
									number_of_seasons={detail.number_of_seasons}
									number_of_episodes={detail.number_of_episodes}
									original_language={detail.original_language}
									genres={detail.genres}
									tagline={detail.tagline}
									overview={detail.overview}
								/>

								<div className='flex flex-col lg:flex lg:justify-center lg:items-start justify-center items-center gap-5 w-full'>
									<h2 className='text-xl font-bold text-[#eee]'>Principal Cast</h2>
									<Cast
										id={id}
										media_type={media_type}
									/>
								</div>
							</div>
						</div>
						{loading ? (
							<Spinner />
						) : (
							<ImagesContainer
								posters={posters}
								backdrops={backdrops}
							/>
						)}
					</div>
				</div>
			))}
		</>
	);
};
