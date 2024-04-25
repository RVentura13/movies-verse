import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SearchInput } from './SearchInput';
import { Footer } from './Footer';

export const NavBar = () => {
	const [shadow, setShadow] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const handleNav = () => {
		setNavbar(!navbar);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 96) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<>
			<nav
				className={
					shadow ? 'w-full m-auto h-24 fixed top-0 z-10 bg-[#0f172a] flex' : 'w-full m-auto h-24 fixed top-0 z-10 flex'
				}
			>
				<div className='flex justify-between items-center m-auto w-[80%]'>
					<Link to='/'>
						<img
							className='hover:scale-110 duration-200 ease-linear'
							src='/logo.svg'
							alt='Logo'
							width='50px'
							height='100%'
							title='Movies-Verse'
						/>
					</Link>

					<div className='gap-5 hidden md:flex justify-end items-center w-full m-auto'>
						<SearchInput />
						<NavLink
							to='/'
							className='hover:text-[#0f172a] duration-150 text-2xl text-[#eee] ease-linear px-2 rounded-lg hover:bg-[#eee]'
							activeclassname='active'
						>
							Inicio
						</NavLink>
						<NavLink
							to='/peliculas'
							className='hover:text-[#0f172a] duration-150 text-2xl text-[#eee] ease-linear px-2 rounded-lg hover:bg-[#eee]'
						>
							Películas
						</NavLink>
						<NavLink
							to='/series'
							className='hover:text-[#0f172a] duration-150 text-2xl text-[#eee] ease-linear px-2 rounded-lg hover:bg-[#eee]'
						>
							Televisión
						</NavLink>
					</div>
					<div
						className={
							navbar
								? 'md:hidden linear duration-500 text-[#1d2640] scale-75'
								: 'md:hidden text-[#eee] hover:scale-110 linear duration-200'
						}
						onClick={() => {
							handleNav();
						}}
						title='Menu'
					>
						<AiOutlineMenu size={45} />
					</div>
				</div>
			</nav>

			<div
				className={
					navbar
						? 'md:hidden fixed left-0 top-0 w-[90%] h-screen z-30 ease-in duration-300 text-[#eee] bg-gradient-to-r from-[#0f172a] from-[97%] to-transparent to-[100%]'
						: 'fixed -left-[100%] top-0 p-10 w-[90%] ease-in duration-300'
				}
			>
				<div className='flex w-full justify-between items-center mt-8'>
					<Link to='/'>
						<img
							className='mx-8 cursor-pointer'
							src='/logo.svg'
							alt='Logo'
							width='60px'
							title='Movies-Verse'
						/>
					</Link>
					<h3 className='text-center text-xl text-[#eee]'>Movies-Verse</h3>
					<div
						className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-110 ease-linear duration-150 mx-8'
						onClick={() => {
							handleNav();
						}}
						title='Close'
					>
						<AiOutlineClose size={25} />
					</div>
				</div>
				<div className='border-b border-gray-300 my-4 ml-1 mr-4'>
					<p className='py-4 text-center text-xl w-[75%] m-auto'>
						¡Explora, descubre y disfruta de la magia del cine y la televisión!
					</p>
				</div>

				<div className='flex flex-col items-start gap-6 w-[90%] m-auto mt-24'>
					<SearchInput />

					<NavLink
						to='/'
						className='hover:text-[#0f172a] text-3xl duration-150 text-[#eee] ease-linear px-2 rounded-lg hover:bg-[#eee]'
						activeclassname='active'
					>
						Inicio
					</NavLink>
					<NavLink
						to='/peliculas'
						className='hover:text-[#0f172a] text-3xl duration-150 text-[#eee] ease-linear px-2 rounded-lg hover:bg-[#eee]'
					>
						Películas
					</NavLink>
					<NavLink
						to='/series'
						className='hover:text-[#0f172a] text-3xl duration-150 text-[#eee] ease-linear px-2 rounded-lg hover:bg-[#eee]'
					>
						Televisión
					</NavLink>
				</div>
				<div className='absolute bottom-5 m-auto w-full'>
					<Footer />
				</div>
			</div>
		</>
	);
};
