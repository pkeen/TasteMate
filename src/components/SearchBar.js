import React from 'react';

function SearchBar() {

    return (
        <form method="GET">
            <div id='sort_by'>
                <input 
                    type='radio' 
                    id="best-match"
                    name="sort_by"
                    value="best_match">
                </input>
                <label for="best-match">
                    Best Match
                </label>
                <input 
                    type='radio' 
                    id="rating"
                    name="sort_by"
                    value="rating">
                </input>
                <label for="rating">
                    Highest Rated
                </label>
                <input 
                    type='radio' 
                    id="review-count"
                    name="sort_by"
                    value="review_count">
                </input>
                <label for="review-count">
                    Most Reviewed
                </label>
            </div>
            
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