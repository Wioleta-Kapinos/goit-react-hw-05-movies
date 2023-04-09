import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import { getInfoAboutMovie } from "utils/API";

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
    const navigate = useNavigate();

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
        <div>
            <button type="button" onClick={() => {navigate (-1)}}> &#10229; Go back</button>
            <section>
            {error && <p className="error">Something went wrong, please try later.</p>}
            {isLoading && <Loader />}
                <img 
                src={image}
                alt={title}
                />
                <div>
                    <h2>{title} ({year})</h2>
                    <ul>
                        <li>
                            <h3>User score:</h3>
                            <p>{Math.round(score * 10)} %</p>
                        </li>
                        <li>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                        </li>
                        <li>
                            <h3>Genres</h3>
                            <p>{genres}</p>
                        </li>
                    </ul>
                </div>
            </section>
                {isLoading && <Loader />}
                <h3>Additional information</h3>
                    <div>
                        <Link to="cast">
                            <button type="button">Cast</button>
                        </Link>
                        <Link to="reviews">
                            <button type="button">Reviews</button>
                        </Link>
                    </div>
                <Outlet />
            <div>
        </div>
        </div>
    )
}

export default MovieDetails;