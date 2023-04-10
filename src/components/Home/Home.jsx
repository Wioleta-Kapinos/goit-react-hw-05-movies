import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { getTrendingMovies } from "utils/API";
import css from "./Home.module.css";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [titles, setTitles] = useState([]);
    const [error, setError] = useState(false);
    
    const trendingMoviesList = async () => {
        setIsLoading(true);
        try {
            const response = await getTrendingMovies();
            setTitles(response.data.results);
            setIsLoading(false);
        } catch { 
            setError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        trendingMoviesList();
    }, []);
    
    return (
        <div className={css.homeBox}>
            <h2>&#11088; Trending movies today &#11088;</h2>
            <ul className={css.movies}>
                {error && <p className={css.error}>Something went wrong, please try later.</p>}
                {isLoading && <Loader /> }
                {titles && titles.map(({ id, title}) => (
                    <li key={id} className={css.moviesItem}>
                        <Link to={`/movies/${id}`}>
                            <p>{title}</p>
                        </Link>
                    </li>
                ))}
            </ul>  
        </div>
    )
}

export default Home;