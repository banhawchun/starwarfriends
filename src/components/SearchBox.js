import React from 'react';

const SearchBox = ({ searchChange }) => {
	return(
		<input 
			className='pa3 ba b--yellow bg-washed-yellow'
			type='search'
			placeholder='Search Starwar'
			onChange={ searchChange }
		/>
	);
}

export default SearchBox;