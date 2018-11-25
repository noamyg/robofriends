import React from 'react'

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className="pa2 ba b--green bg-lightest-blue">
			<input
				type="search"
				placeholder="Search Robot"
				onChange={searchChange}
			/>	
		</div>
		
	)
}

export default SearchBox