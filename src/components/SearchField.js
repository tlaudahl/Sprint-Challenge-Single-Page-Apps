import React from 'react'

export default function SearchField(props) {
    return (
        <div>
            <input type='search' id='search' placeholder='Search...' onChange={props.onSearch} value={props.searchTerm} />
        </div>
    )
}
