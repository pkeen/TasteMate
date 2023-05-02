import React from 'react';
import { ButtonGroup, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import style from "./SearchBar.module.css";
import {styled} from '@mui/system'

const SearchBarTextField = styled(TextField, {
    name: "SearchBarTextField",
})({
    width: '100%',
    "& .MuiInputBase-root": {
        height: '100%'
    }
})

const StyledButtonGroup = styled(ButtonGroup)({
    '& .MuiButtonGroup-grouped': {
        color: "green",
      },
})



function SearchBar() {

    return (
        <form className={style.grid}>
            <SearchBarTextField
                name="search"
                label="search">

            </SearchBarTextField>

            <SearchBarTextField
                name="location"
                label="location">

            </SearchBarTextField>
          
            <Button     
                variant="contained"
                type="submit"
                sx={{
                    height: '100%',
                    width: '100%'
                }}
                >
                Search
            </Button>

            <ButtonGroup
                className={`${style["button-group"]}`}
                variant="text" 
                exclusive
                fullWidth>
                <ToggleButton value="best-match" style={{oulineColor: 'red', outlineWidth: '2px'}}>
                    Best Match
                </ToggleButton>
                <ToggleButton>
                    Highest Rated
                </ToggleButton>
                <ToggleButton>
                    Most Reviewed
                </ToggleButton>
            </ButtonGroup>
               
                

                
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