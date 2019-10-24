import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input
            className="w-50 pa3 ba b00greeen bg-lightest-blue" 
            type="search" 
            placeholder="search robots"   
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;