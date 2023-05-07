import React, { useState } from 'react';
import { TextField, ToggleButtonGroup, ToggleButton } from '@mui/material';
import Button from '@mui/material/Button';
import style from "./SearchBar.module.css";
import {styled} from '@mui/system'
import ToggleSelect from './ToggleSelect/ToggleSelect';


const SearchBarTextField = styled(TextField, {
    name: "SearchBarTextField",
})({
    width: '100%',
    "& .MuiInputBase-root": {
        height: '100%'
    },
    gridColumn: 'span 1'
})



function SearchBar() {

    const [searchTermState, setSearchTermState] = useState(null)
    const [locationState, setLocationState] = useState(null)
    const [sortState, setSortState] = useState(null)

    function updateSearchTerm(e) {
        const value = e.target.value
        setSearchTermState(value);
    }

    function updateLocationState(e) {
        const value = e.target.value;
        setLocationState(value);
    }

    const handleSortState = e => {
        const sortValue = e.target.value
        sortValue === sortState ? setSortState(null) : setSortState(sortValue)
    }

    const handleButtonClick = () => {
        console.log(`Searching Yelp with ${searchTermState}, ${locationState} and ${sortState} sorting`)
    }

    
    console.log(searchTermState)
    console.log(`Location: ${locationState}`)
    console.log(sortState)
    

    return (
        <form className={style.grid}>
            <SearchBarTextField
                name="search"
                label="search"
                onChange={updateSearchTerm}>

            </SearchBarTextField>

            <SearchBarTextField
                name="location"
                label="location"
                onChange={updateLocationState}>

            </SearchBarTextField>
          
            <Button     
                variant="contained"
                type="submit"
                sx={{
                    height: '100%',
                    width: '100%'
                }}
                onClick={handleButtonClick}
                >
                Search
            </Button>

            <ToggleSelect 
                sortState={sortState}
                handleSortState={handleSortState}
                sx={{
                    gridColumn: {
                        xs: 1,
                        sm: 2
                    },
                    marginBottom: '2rem'
                }}
            >
            </ToggleSelect>
                   
        </form>
    )

     
    /*

    return (
        <form>

            <Grid container columnSpacing={2}>

                <Grid xs={12} md={4} item >
                    <div>
                    <TextField 
                        className={style.inputField}
                        InputLabelProps={{
                            shrink: true
                          }}
                        type="text"
                        autoFocus="true"
                        label="Search"
                        name="search"
                        variant="filled"
                        >
                    </TextField>
                    </div>
                    
                </Grid>

                <Grid item xs={12} md={4}>
                    <SearchBarTextField
                        name="location"
                        label="location">

                    </SearchBarTextField>
                    
                </Grid>
                        
                <Grid xs={12} md={4}>

                        <Button

                            type="submit"
                            variant="contained"
                            sx={{
                                height: '100%',

                            }}
                            >
                            Search
                        </Button>

                    
                </Grid>
                    
              
            </Grid>
        
        </form>
    )
    */


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