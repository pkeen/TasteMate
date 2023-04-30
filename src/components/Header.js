import React from 'react';
import Title from "./Title";
import SearchBar from "./SearchBar";
import { Box } from "@mui/material";

function Header() {
    return (
        <Box >
            <Title></Title>
            <SearchBar></SearchBar>
        </Box>
    )
}

export default Header;
