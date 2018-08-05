import React from 'react';

const SearchBar = props => (
	<input
		type="text"
		value={props.searchText}
		onChange={event => props.onChange(event.currentTarget.value)}
		placeholder={props.placeholder}
		className="search-input"
	/>
);

export default SearchBar;
