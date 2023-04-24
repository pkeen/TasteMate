import React from 'react';
import Business from "./Business";

function BusinessList() {

    const businessList = [];

    const times = 6;

    for (let i = 0; i < times; i++) {
        businessList.push(
            <li key={i}> <Business /> </li> 
        );   
    };


    return (
        <ul>
            {businessList}
        </ul>
    );

}

export default BusinessList;