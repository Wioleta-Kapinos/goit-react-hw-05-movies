import { getCast } from "utils/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import placeholderImage from "../../image/placeholderImage.png"
import css from "./Cast.module.css";

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
            <ul className={css.castBox}>
            {error && <p className={css.error}>Something went wrong, please try later.</p>}
            {cast && cast.length ? (
          <>
            {cast.map(
              ({ id, profile_path, original_name, name, character }) => (
                <li key={id}>
                  <img
                    src={profile_path ? `https://www.themoviedb.org/t/p/w500/${profile_path}` : {placeholderImage}}
                    alt={original_name}
                    width={150}
                  />
                  <h4>{name}</h4>
                  <p className={css.description}>Character: {character}</p>
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