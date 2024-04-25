import { useEffect, useState, useContext, useRef } from 'react';
import { Contexto } from '../context/Context';
import { getDataContent } from '../helpers/getData';
import { Link } from 'react-router-dom';

import { Spinner } from './Spinner';
import { GridContent } from './GridContent';

export const ContentPage = ({ typeOfList }) => {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [pageKey, setPageKey] = useState(0);
	const isInitialMount = useRef(true);
	const { genreSelected } = useContext(Contexto);

	const divRef = useRef(null);

	// Revisa si el scroll está hasta abajo de la página
	const isAtBottom = () => {
		const { scrollTop, clientHeight, scrollHeight } = divRef.current;
		return scrollTop + clientHeight === scrollHeight;
	};

	//Carga las primeras peliculas y al haber un cambio en el número de página, llama de nuevo a la API
	useEffect(() => {
		fetchData();
	}, [pageKey]);

	//Llamado a la API
	const fetchData = async () => {
		setLoading(true); // Muestra el Loading

		//Llamado a la API
		const data = await getDataContent(typeOfList, genreSelected, page);

		//Carga la información al estado
		setMovies((movies) => [...movies, ...data]);

		setLoading(false); //Ocultar el Loading
	};

	//Aumenta en uno la página al presionar el botón ver más en dispositivos moviles y llama a la api para traer más películas
	const handleScroll = () => {
		setPage((prevPage) => prevPage + 1);
	};

	//Llamado a la función de cambio de genero de pelicula cada vez que cambie el genero
	useEffect(() => {
		if (isInitialMount.current) {
			// Evitamos la lógica del useEffect en el montaje inicial
			isInitialMount.current = false;
		} else {
			setPage(1);
			setPageKey((prevkey) => prevkey + 1);
			setMovies([]);
			if (divRef.current) {
				divRef.current.scrollTop = 0;
			}
		}
	}, [genreSelected]);

	// Al llegar el scroll al final aumenta la página en uno y activa el llamado de la API
	useEffect(() => {
		const refreshData = () => {
			if (isAtBottom()) {
				setPage((prevPage) => prevPage + 1);
				setPageKey((prevkey) => prevkey + 1);
			}
		};

		const divElement = divRef.current; // Con esto se verifica si existe el elemento en el DOM antes de removerlo

		//
		if (divElement) {
			divElement.addEventListener('scroll', refreshData);
			return () => {
				divElement.removeEventListener('scroll', refreshData);
			};
		}
	}, []);

	return (
		<>
			<div
				className='flex-grow overflow-y-auto h-[80vh] scroll-bar pt-5 pb-10 grid grid-cols-[repeat(auto-fill,230px)] gap-3 justify-center items-start'
				ref={divRef}
			>
				{movies.map((movie, index) =>
					!movie.error ? (
						<Link
							to={`/details/${typeOfList}/${movie.id}`}
							key={index}
						>
							<GridContent
								poster_path={movie.poster_path}
								vote_average={movie.vote_average}
								release_date={movie.release_date}
								first_air_date={movie.first_air_date}
								title={movie.title}
								name={movie.name}
							/>
						</Link>
					) : (
						<p
							className='text-[#eee] py-10'
							key={movie.error}
						>
							{movie.error}
						</p>
					)
				)}
				{loading && <Spinner />}

				{!loading && (
					<button
						className='lg:hidden col-start-1 self-center text-[#eee] text-lg font-semibold mb-10 bg-[#d9254c] py-3 px-4 rounded-lg focus:bg-[#eee] focus:text-[#0f172a]'
						onClick={() => handleScroll()}
					>
						Ver más
					</button>
				)}
			</div>
		</>
	);
};
