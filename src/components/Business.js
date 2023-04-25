import React from 'react';
import StarRating from './StarRating';
import style from "./Business.module.css";
import styled from 'styled-components';


const BusinessCard = styled.div`
    height: 500px;
    width: 400px;
    display: grid;
    overflow: hidden;
    grid-template-rows: 4fr 3fr;
    border: 1px solid black;
`
/*
const BusinessImage = styled.div`
    grid-row: 1 / 2;
    height: 100%;
    overflow: hidden;
    background-image: url("https://content.codecademy.com/programs/react/ravenous/pizza.jpg");
    background-size: cover;
    background-position: 0%;
    background-repeat: no-repeat;
`
*/

const BusinessInfoContainer = styled.div`
    grid-row: 2 / 3;
    display: grid;
    grid-template-rows: 2fr 2fr 2fr;
`

const MainInfo = styled.div`
    grid-row-end: span 1;
`

const BusinessTitle = styled.h2`
    
`

const BusinessCategory = styled.i`
    
`

const BusinessAddress = styled.p`

`
const BusinessRatingReviews = styled.div`
    
`


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

    const BusinessImage = styled.div`
        background-image: url(${props => props.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"})
    `
    
    const ratingReviews = (
        <BusinessRatingReviews>
            <StarRating 
                rating={business.rating}
            />
            <p>Rating: {business.rating}</p>
            <p>Reviews: {business.reviewCount}</p>
        </BusinessRatingReviews>
    )

    /*
    return (
        <BusinessCard>
            
            <BusinessImage />
            
            <BusinessInfoContainer>
                <BusinessTitle>{business.name}</BusinessTitle>
                <BusinessCategory>{business.category}</BusinessCategory>
                {ratingReviews}
                <div>
                    <p> 
                        {`${business.address}, ${business.city}`}
                    </p>
                    <p>
                        {`${business.state}, ${business.zipCode}`}
                    </p>
                </div>
            </BusinessInfoContainer>
            
            
        </BusinessCard>
    )
    */

    return (
        <div className={style["business-card"]}>
            
            <div
                class={style["img-container"]}
                style={{
                    backgroundImage: `url(${business.imageSrc || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"})`
                }}
                
            >
            </div>

            <div className={style["info-container"]}>

                <div className={`${style["main-info"]} ${style["flex-center"]}`}>
                    <h2>{business.name}</h2>
                    <i>{business.category}</i>
                </div>

                <div className={`${style["ratings"]} ${style["flex-center"]}`}>
                    <div className={style["star-rating"]}>
                        <StarRating 
                            rating={business.rating}
                        />
                    </div>
                    <p>Total reviews: {business.reviewCount}</p>
                </div>
                <div className={`${style["address"]} ${style["flex-center"]}`}>
                    <p>{business.address}, {business.city}</p>
                    <p>{business.state}, {business.zipCode}</p>
                </div>

            </div>
            

        </div>
    )
}

export default Business;