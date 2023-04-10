import { getReviews } from "utils/API";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);
    const { movieId } = useParams();

    const reviewsMovieDetails = async id => {
        setIsLoading(true);
        try {
            const responseReviews = await getReviews(id);
            setReviews(responseReviews.data.results);
            setIsLoading(false);
        } catch {
            setError(true);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        reviewsMovieDetails(movieId);
    }, [movieId]);

    return (
        <div className={css.reviewsBox}>
            {error && <p className={css.error}>Something went wrong, please try later.</p>}
            {isLoading && <Loader />}
            <ul>
            {reviews && reviews.length ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h4>Author: {author}</h4>
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