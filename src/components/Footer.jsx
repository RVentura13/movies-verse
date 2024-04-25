import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();

export const Footer = () => {
	return (
		<div className='flex flex-col justify-center items-center gap-2 bg-[#0f172a] text-[#eee] p-2 my-5'>
			<div className='flex gap-4 justify-center items-center'>
				<img
					src='/logo.svg'
					alt='logo'
					width={30}
					height={30}
				/>
				<h2 className='text-[#eee] text-2xl'>Movies-Verse</h2>
			</div>
			<p className='text-base text-center'>Todos los derechos reservados © {añoActual}</p>
			<a
				className='cursor-pointer text-lg font-semibold marca-personal '
				href='https://www.rventura.dev/'
				target='_blanck'
				rel='noopener noreferrer'
				title='Web Site'
			>
				rventura.dev
			</a>
			<div className='flex items-center justify-center gap-5 m-auto py-2'>
				<div className='rounded-full shadow-md shadow-[#eee] p-2 cursor-pointer hover:scale-110 ease-linear duration-150 text-lg text-[#eee]'>
					<a
						href='https://www.linkedin.com/in/rony-ventura-0034b5211/'
						target='_blank'
						rel='noopener noreferrer'
						title='LinkedIn'
					>
						<FaLinkedinIn />
					</a>
				</div>
				<div className='rounded-full shadow-md shadow-[#eee] p-2 cursor-pointer hover:scale-110 ease-linear duration-150 text-lg text-[#eee]'>
					<a
						href='https://github.com/RVentura13'
						target='_blank'
						rel='noopener noreferrer'
						title='GitHub'
					>
						<FaGithub />
					</a>
				</div>
				<div className='rounded-full shadow-md shadow-[#eee] p-2 cursor-pointer hover:scale-110 ease-linear duration-150 text-lg text-[#eee]'>
					<a
						href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#105;&#110;&#102;&#111;&#64;&#114;&#118;&#101;&#110;&#116;&#117;&#114;&#97;&#46;&#100;&#101;&#118;'
						target='_blank'
						rel='noopener noreferrer'
						title='Send mail'
					>
						<AiOutlineMail />
					</a>
				</div>
				<div className='rounded-full shadow-md shadow-[#eee] p-2 cursor-pointer hover:scale-110 ease-linear duration-150 text-lg text-[#eee]'>
					<a
						href='assets/documents/cv.pdf'
						download='CV Rony Ventura'
						title='Download CV'
					>
						<BsFillPersonLinesFill />
					</a>
				</div>
			</div>
		</div>
	);
};
