import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { getInfoAboutMovie } from "utils/API";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
   
    const { movieId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [image, setImage] = useState();
    const [title, setTitle] = useState([]);
    const [year, setYear] = useState();
    const [score, setScore] = useState(0);
    const [overview, setOverview] =useState("");
    const [genres, setGenres] = useState([]);
    const location = useLocation();
    const backLink = location.state?.from ?? "/";

    const getMoreInformation = async (id) => {
        setIsLoading(true);
        try {
            const movieInfo = await getInfoAboutMovie(id);
            setTitle(movieInfo.data.title);
            setYear(new Date(movieInfo.data.release_date).getFullYear());
            setScore(movieInfo.data.vote_average);
            setOverview(movieInfo.data.overview);
            setImage(`https://image.tmdb.org/t/p/w500${movieInfo.data.poster_path}`);
            setIsLoading(false);

            let arrayGenre = [];
            movieInfo.data.genres.map(genre => {
            arrayGenre = [...arrayGenre, genre.name];
            return setGenres(arrayGenre.join(' * '));
            });
        } catch {
            setError(true);
            setIsLoading(false);
        }
    };   

    useEffect(() => {
        getMoreInformation(movieId);
    }, [movieId]);

    return (
        <div className={css.detailsBox}>
            <Link to={backLink}>
            <button type="button" className={css.btn}>&#10229; Go back</button>
            </Link>
            <section className={css.detailsSection}>
            {error && <p className={css.error}>Something went wrong, please try later.</p>}
            {isLoading && <Loader />}
                <img 
                className={css.movieImage}
                src={image}
                alt={title}
                />
                <div className={css.details}>
                    <h3>{title} ({year})</h3>
                    <ul className={css.detailsList}>
                        <li>
                            <p>User score: {Math.round(score * 10)} %</p>
                        </li>
                        <li>
                            <h4>Overview</h4>
                            <p>{overview}</p>
                        </li>
                        <li>
                            <h4>Genres</h4>
                            <p>{genres}</p>
                        </li>
                    </ul>
                </div>
            </section>
            <div className={css.informationBox}>
                {isLoading && <Loader />}
                <h3>Additional information</h3>
                <div className={css.btnBox}>
                    <Link to="cast">
                        <button type="button" className={css.btn}>Cast</button>
                    </Link>
                    <Link to="reviews">
                        <button type="button" className={css.btn}>Reviews</button>
                    </Link>
                </div>
            </div>
                <Outlet />
            <div>
        </div>
        </div>
    )
}

export default MovieDetails;