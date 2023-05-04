import React from 'react';
import Title from "./Title";
import SearchBar from "./SearchBar";
import { Grid } from '@mui/material';



function Header() {
    return (
        <Grid container css={{marginBottom: '1rem'}}>
            
            <Grid item xs={12}>
                <Title></Title>
            </Grid>

            <Grid item xs={12}>
                <SearchBar></SearchBar>
            </Grid>
            
        </Grid>
    )
}

export default Header;
