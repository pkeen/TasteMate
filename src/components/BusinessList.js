import React from 'react';
import Business from "./Business";
import styled from 'styled-components';

const BusinessUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 500px;
    grid-gap: 3rem;

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

function BusinessList(props) {
    
    const businessList = props.businessArray.map((business, index) => {
        return <BusinessLi key={index}> <Business business={business}/> </BusinessLi> 
    })

    return (
        <BusinessUl>
            {businessList}
        </BusinessUl>
    );

}

export default BusinessList;