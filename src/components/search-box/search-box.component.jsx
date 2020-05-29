import React from "react";

// Import styles
import './search-box.style.css'

export const SearchBox = props => (
    <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={e => props.onSearchChange(e.target.value)}
    />
);
