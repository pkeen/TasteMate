import React from 'react';
import StarRating from './StarRating';
import style from "./Business.module.css";
import { Card, Typography } from '@mui/material';



function Business({business}) {

    return (
        <Card className={style["business-card"]}>
            
            <div
                className={style["img-container"]}
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
                        <Typography color="primary" sx={{marginLeft: 1}}>
                            {`(${business.reviewCount})`}
                        </Typography>
                    </div>
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