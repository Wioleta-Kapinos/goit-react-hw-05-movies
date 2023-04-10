import { Link } from "react-router-dom";
import css from "./Navigate.module.css";

const Navigate = () => {
    return (
        <div className={css.wrapNav}>
            <nav className={css.navigate}>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </div>
    )
}

export default Navigate;