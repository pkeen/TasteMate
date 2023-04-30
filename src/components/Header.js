import React from 'react';
import Title from "./Title";
import SearchBar from "./SearchBar";
import { Grid } from '@mui/material';
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react'



function Header() {
    return (
        <Grid container css={{marginBottom: '1rem'}}>
            
            <Grid xs={12}>
                <Title></Title>
            </Grid>

            <Grid xs={12}>
                <SearchBar></SearchBar>
            </Grid>
            
        </Grid>
    )
}

export default Header;
