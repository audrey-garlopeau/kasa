import filledStar from "../assets/images/star_filled.svg";
import emptyStar from "../assets/images/star_empty.svg";

export default function Rate({ starNb }) {
    const starRating = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {starRating.map((star) => {
                if (starNb >= star)
                    return <img key={star.toString()} className="rating__star" src={filledStar} alt={`étoile ${star}`} />
                else
                    return <img key={star.toString()} className="rating__star" src={emptyStar} alt={`étoile ${star}`} />
            })}
        </div>
    )
};