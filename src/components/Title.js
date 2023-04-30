import React from 'react';
import { Typography } from '@mui/material';

function Title () {
    return (
        <>
            <Typography 
                variant="h1"
                color="primary"
            >
                TasteMate
            </Typography>
            <Typography 
                variant="subtitle1"
                gutterBottom
            >
                Taste the world
            </Typography>
        </>
    )
}

export default Title;