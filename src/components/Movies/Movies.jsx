import { useEffect, useState } from "react"
import { searchMovie } from "utils/API";
import { useSearchParams, Link } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

const Movies = () => {
    const [value, setValue] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const query = searchParams.get("query");

    const handleSubmit = async event => {
        event.preventDefault();
        setSearchParams({ query: event.target[0].value});
        event.target.reset();
        if(value === "") {
            alert `Empty field, please complete them.`
            return;
        };
    }
    const handleSearch = async query => {
        setIsLoading(true);
        try {
        const findedMovie = await searchMovie(query);
        if (findedMovie.data.results.length === 0 ) {
            alert `Sorry, there are no titles matching your search`;
            setIsLoading(false);
            return;
        };
        setMovies(findedMovie.data.results);
        setIsLoading(false);
        console.log(movies);
        } catch {
        setError(true);
        setIsLoading(false);
        }
    }

    useEffect(() => {
         if(!query) return;
         handleSearch(query);
     }, [query]);

    const handleChange = event => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleChange}
            type="text"
            placeholder="Enter the movie name"
            />
            <button type="submit">Search</button>
            <ul>
            {error && <p className="error">Something went wrong, please try later.</p>}
                {isLoading && <Loader />}
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                        <p>{movie.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </form>
    )
}

export default Movies;