import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import style from "./SearchBar.module.css";



const heightStyle = {
    style: {
        height: 100
    }
}

const styles = theme => ({
    input: {
      height: 40
    },
    button: {
      height: 40
    },
    selectRoot: {
      height: 40,
      display: "table"
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
    },
    select: {
      height: 40,
      paddingTop: 0,
      paddingBottom: 0,
      display: "table-cell",
      verticalAlign: "middle"
    }
  });

function SearchBar() {


    return (
        <form>

            <Grid container>

                <Grid xs={12} md={4}>
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
                        fullWidth>
                    </TextField>
                </Grid>

                <Grid xs={12} md={4}>
                    <TextField
                        className={style.inputField}
                        InputLabelProps={{
                            shrink: true
                          }}
                        fullWidth
                        type="text"
                        name="term"
                        label="Location"
                        variant="filled">
                    </TextField>
                </Grid>
                        
                <Grid xs={12} md={4}>
                    <Button
                        className={style.inputField}
                        fullWidth
                        type="submit"
                        variant="contained"
                        size="large"
                        >
                        Search
                    </Button>
                </Grid>
                    
              
            </Grid>
            

            

            
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