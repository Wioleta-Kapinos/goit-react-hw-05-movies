import { getReviews } from "utils/API";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    const reviewsMovieDetails = async id => {
        setIsLoading(true);
        try {
        const responseReviews = await getReviews(id);
        setReviews(responseReviews.data.results);
        setIsLoading(false);
        } catch (error) {
            console.error(error.message);
            setIsLoading(false);
        }
    }

        useEffect(() => {
            reviewsMovieDetails(movieId);
        }, [movieId]);

    return (
        <div>
            {isLoading && <Loader />}
            <ul>
        {reviews && reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>There is no review for this movie.</p>
        )}
      </ul>
        </div>
    )
}

export default Reviews;