import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const StarRating = ({rating}) => {

    // Had to split these to get more accurate star rating i.e 4 was making 3.5 stars
    let ratingInteger = Math.floor(rating);
    let ratingDecimal = rating % 1;

   const stars = [...Array(5)].map( (star, index) => {
        index += 1;
        if (ratingInteger >= 1) {
            ratingInteger -= 1;
            return <StarIcon color="primary"/>
        } else {
            if (ratingDecimal > 0.01) {
                ratingDecimal = 0;
                return <StarHalfIcon color="primary"/>
            } else {
                return <StarBorderOutlinedIcon />
            }
        }
    });   
        


    return <div>{stars}</div>;
    

   
   

        /*
    //const [rating, setRating] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              //onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
    */
}
export default StarRating;