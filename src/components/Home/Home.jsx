import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { getTrendingMovies } from "utils/API";


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
        <div>
            <h2>Trending movies today</h2>
            <ul>
                {error && <p className="error">Something went wrong, please try later.</p>}
                {isLoading && <Loader /> }
                {titles && titles.map(({ id, title}) => (
                    <li key={id}>
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