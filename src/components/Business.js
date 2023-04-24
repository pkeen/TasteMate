import React from 'react';

function Business() {

    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90 
    }
    
    return (
        <div>
            <img src={business.imageSrc} />
            <h2>{business.name}</h2>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state}</p>
            <p>{business.zipCode}</p>
            <p>{business.category}</p>
            <p>{business.rating}</p>
            <p>{business.reviewCount}</p>
        </div>
    )
}

export default Business;