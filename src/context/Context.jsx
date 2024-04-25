import { createContext, useState } from 'react';

export const Contexto = createContext();

export const ContextProvider = ({ children }) => {
	const [listOf, setListOf] = useState('movie');
	const [timeTend, setTimeTend] = useState('day');
	const [genreSelected, setGenreSelected] = useState('');

	return (
		<Contexto.Provider
			value={{
				listOf,
				setListOf,
				timeTend,
				setTimeTend,
				genreSelected,
				setGenreSelected,
			}}
		>
			{children}
		</Contexto.Provider>
	);
};
