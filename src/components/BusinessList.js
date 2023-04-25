import React from 'react';
import Business from "./Business";
import styled from 'styled-components';

const BusinessUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 500px;
    grid-gap: 4rem 50px;

    @media only screen and (max-width: 1250px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media only screen and (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
    }
    
    @media only screen and (max-width: 700px) {
            grid-template-columns: 1fr;
    }

`

const BusinessLi = styled.li`
    display: inline;
`

function BusinessList() {

    const businessList = [];

    const times = 6;

    for (let i = 0; i < times; i++) {
        businessList.push(
            <BusinessLi key={i}> <Business /> </BusinessLi> 
        );   
    };


    return (
        <BusinessUl>
            {businessList}
        </BusinessUl>
    );

}

export default BusinessList;