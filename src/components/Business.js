import React from 'react';
import StarRating from './StarRating';
import style from "./Business.module.css";
import { Card } from '@mui/material';



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
        <Card className={style["business-card"]}>
            
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
            
        </Card>
    )
}

export default Business;