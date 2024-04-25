import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import moment from 'moment';

import { getDataCombined, getDetails } from './helpers/getData';
import { NavBar } from './components/NavBar';
import { GridContent } from './components/GridContent';

export const Person = () => {
	const [person, setPerson] = useState([]);
	const [dataCombined, setDataCombined] = useState([]);

	const { id } = useParams();
	const media_type = 'person';

	const fetchData = async () => {
		const data = await getDetails(id, media_type);
		setPerson(data);
	};
	const fetchDataCombined = async () => {
		const dataCombined = await getDataCombined(id);
		setDataCombined(dataCombined);
	};

	useEffect(() => {
		fetchData();
		fetchDataCombined();
	}, []);

	return (
		<>
			<NavBar />
			<div className='mt-28 m-auto w-[80%] mb-10'>
				{person.map((per, index) => (
					<div
						key={index}
						className='flex flex-col md:flex-row gap-5 justify-center items-center md:justify-center md:items-center'
					>
						<img
							className='rounded-lg'
							width='250px'
							src={`https://image.tmdb.org/t/p/w500${per.profile_path}`}
							alt='Poster'
						/>
						<div className='flex flex-col gap-5 items-center md:items-start'>
							<h2 className='text-[#eee] text-3xl'>{per.name}</h2>
							{per.birthday && (
								<h3 className='text-[#eee] text-xl'>{`${moment(per.birthday).format('DD/MM/YYYY')} `}</h3>
							)}

							<h3 className='text-[#eee] text-xl'>{per.place_of_birth}</h3>

							<h2 className='text-[#eee] text-md'>{per.biography}</h2>
						</div>
					</div>
				))}
				<h3 className='text-[#eee] text-3xl mt-10 mb-3 text-center md:text-left'>Participaciones</h3>
				<div className='bg-[#1d2640] rounded-lg pt-5 pb-10 grid grid-cols-[repeat(auto-fill,230px)] gap-4 justify-center items-start'>
					{dataCombined.map((per, index) => (
						<Link
							to={`/details/${per.media_type}/${per.id}`}
							key={index}
						>
							<GridContent
								poster_path={per.poster_path}
								vote_average={per.vote_average}
								release_date={per.release_date}
								first_air_date={per.first_air_date}
								title={per.title}
								name={per.name}
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};
