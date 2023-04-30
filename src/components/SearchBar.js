import React from 'react';
import { TextField } from '@mui/material';
import {Input} from '@mui/material';
import Button from '@mui/material/Button';



function SearchBar() {

    return (
        <form>  
            <TextField 
                type="text"
                autoFocus="true"
                label="Search"
                name="search"
                variant="filled">
            </TextField>

            <TextField
                type="text"
                name="term"
                label="Location"
                variant="filled">
            </TextField>
            <Button
                type="submit"
                variant="contained"
                size="large"
                >
                Search
            </Button>
        </form>
        
    )

    /* Regular HTML Form - might be helpful later for API debugging
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
    */
}

export default SearchBar;