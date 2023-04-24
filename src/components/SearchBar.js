import React from 'react';

function SearchBar() {

    return (
        <form method="GET">
            <input 
                type="text"
                name="term"
                placeholder="search">
            </input>
            <input 
                type="text"
                name="location"
                placeholder='location'>  
            </input>
            <input type='submit' value="Let's go!"></input>
        </form>
    )
}

export default SearchBar;