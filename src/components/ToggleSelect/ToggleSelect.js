import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { styled } from '@mui/material/styles';

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
    }
})

const ToggleSelect = () => {
    return (
        <StyledToggleButtonGroup
            name="filter"
            value="select"
            exclusive
            sx={{
                gridColumn: {
                    xs: "1 / 2",
                    sm: "2 / 3"
                }
            }}
            >
            <ToggleButton value='best-match'>Best Match</ToggleButton>
            <ToggleButton value='highest-rated'>Highest Rated</ToggleButton>
            <ToggleButton value='most-reviewed'>Most Reviewed</ToggleButton>
        </StyledToggleButtonGroup>
    )
}

export default ToggleSelect;