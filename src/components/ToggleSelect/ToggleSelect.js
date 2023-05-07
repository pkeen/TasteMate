import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import MuiToggleButton from "@mui/material/ToggleButton";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
    ".MuiToggleButtonGroup-grouped": {
        borderRadius: '0%',
        borderTop: 0,
        borderLeft: 0,
        fontSize: '.7rem',
        fontWeight: 400,
        flex: '1 1 0px',
        color: '#aaa'
    },
    ".MuiToggleButtonGroup-grouped:last-child": {
        borderRight: 0
    },
    "&.Mui-selected": {
        backgroundColor: "#fff"
    }
})

const StyledToggleButton = styled(MuiToggleButton)(({ theme }) =>({
    "&.Mui-selected": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default
    },
    "&:hover, &.Mui-selected:hover": {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.light
    },
}))


const ToggleSelect = ({ filterState, handleFilterState}) => {
    /*
    const [filterState, setFilterState] = useState(null);
    */

    

    return (
        <StyledToggleButtonGroup
            name="filter"
            value={filterState}
            onChange={handleFilterState}
            exclusive
            sx={{
                gridColumn: {
                    xs: "1 / 2",
                    sm: "2 / 3"
                }
            }}
            >
            <StyledToggleButton value="best-match">Best Match</StyledToggleButton>
            
            <StyledToggleButton value='highest-rated'>Highest Rated</StyledToggleButton>
            <StyledToggleButton value='most-reviewed'>Most Reviewed</StyledToggleButton>
        </StyledToggleButtonGroup>
    )
}
/*
<ToggleButton 
                value='best-match' 
                onClick={handleBMClick} 
                isActive={bestMatchState} 
                sx={{
                    backgroundColor: '#000'
                }}>Best Match</ToggleButton>
                */

export default ToggleSelect;