import { useEffect, useState, useContext } from 'react';
import { Contexto } from '../context/Context';

import { getGenres } from '../helpers/getData';

export const SideBar = ({ typeOfList }) => {
	const [genres, setGenres] = useState([]);
	const { genreSelected, setGenreSelected } = useContext(Contexto);

	// const handleChangeGenre = (id) => {
	// 	setGenreSelected(id);
	// 	console.log('id:', id);
	// };

	useEffect(() => {
		const fetchData = async () => {
			const data = await getGenres(typeOfList);

			setGenres(data);
		};

		fetchData();
	}, []);

	return (
		<div className='flex flex-col gap-1 justify-start items-center md:justify-start md:items-start w-full h-full md:h-[80vh] rounded-lg pl-2 px-2 md:px-2 pb-5 bg-[#1d2640] md:w-[20%] overflow-y-auto scroll-bar'>
			<div className='border-b-2 border-[#0f172a] w-full'>
				<h3 className='text-center py-4 text-2xl text-[#eee] '>Géneros</h3>
			</div>

			<div className='grid grid-cols-3 md:flex md:flex-col gap-2 pt-5 md:items-start'>
				{genres.map((genre) => (
					<button
						key={genre.id}
						className='cursor-pointer text-center md:text-left text-lg text-[#eee] px-2 rounded-lg focus:bg-[#d9254c] focus:text-[#eee] focus:ml-4 focus:font-semibold hover:scale-105 hover:bg-[#eee] hover:text-[#0f172a] duration-150 linear'
						onClick={() => setGenreSelected(genre.id)}
					>
						{genre.name}
					</button>
				))}
			</div>
		</div>
	);
};
