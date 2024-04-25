export const ImagesContainer = ({ posters, backdrops }) => {
	const url_image = 'https://image.tmdb.org/t/p/w500';
	const url_image_original = 'https://image.tmdb.org/t/p/original';

	return (
		<>
			{posters.length !== 0 && (
				<div className='w-full flex flex-col justify-center items-center bg-[#1d2640] rounded-lg mb-1'>
					<h1 className='text-6xl text-white text-center pt-10 pb-2'>Posters</h1>
					<div className='w-[90%] flex flex-wrap gap-5 justify-center items-start mb-10 bg-[#1d2640] rounded py-10'>
						{posters.slice(0, 10).map((img, index) => (
							<div
								key={index}
								className=' relative w-[240px] hover:scale-y-125 ease-out hover:scale-x-125 transition-all duration-300 items-end hover:z-[1] group'
							>
								<img
									src={`${url_image}${img.file_path}`}
									alt='Imagen'
									className='relative w-full h-full object-cover rounded-lg '
								/>
								<button className='absolute top-2 left-2 bg-[#d9254c] text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100'>
									<a
										href={`${url_image_original}${img.file_path}`}
										target='_blank'
									>
										Abrir
									</a>
								</button>
							</div>
						))}
					</div>
				</div>
			)}
			{backdrops.length !== 0 && (
				<div className='w-full flex flex-col justify-center items-center bg-[#1d2640] rounded-lg mb-5'>
					<h1 className='text-6xl text-white text-center pt-10 pb-2'>Fondos</h1>
					<div className='w-[90%] flex flex-wrap gap-5 justify-center items-start py-10'>
						{backdrops.slice(0, 10).map((img, index) => (
							<div
								key={index}
								className='relative w-[320px] hover:scale-y-125 ease-out hover:scale-x-125 transition-all duration-300 items-end hover:z-[1] group'
							>
								<img
									src={`${url_image}${img.file_path}`}
									alt='Imagen'
									className='relative w-full h-full object-cover rounded-lg '
								/>
								<button className='absolute top-2 left-2 bg-[#d9254c] text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100'>
									<a
										href={`${url_image_original}${img.file_path}`}
										target='_blank'
									>
										Abrir
									</a>
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};
