import { getCast } from "utils/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

const Cast = () => {
    const [cast, setCast] = useState();
    const { movieId } = useParams();
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(false);

    const infoAboutCast = async (id) => {
        setIsloading(true);
        try {
            const responseCast = await getCast(id);
            setCast(responseCast.data.cast);
            setIsloading(false);
    } catch {
        setError(true);
        setIsloading(false);
    }
  }

    useEffect(() => {
      infoAboutCast(movieId);
    }, [movieId]);

    return (
        <div>
            {isLoading && <Loader />}
            <ul>
            {error && <p className="error">Something went wrong, please try later.</p>}
            {cast && cast.length ? (
          <>
            {cast.map(
              ({ id, profile_path, original_name, name, character }) => (
                <li key={id}>
                  <img
                    src={profile_path ? `https://www.themoviedb.org/t/p/w500/${profile_path}` : <p>Image is not available.</p>}
                    alt={original_name}
                  />
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </li>
              )
            )}
          </>
            ) : (
              <p>There is no cast for this movie.</p>
            )}
            </ul>
        </div>
    )
}

export default Cast;