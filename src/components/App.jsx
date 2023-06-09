import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "index.css";

const Navigate = lazy(() => import('./Navigate/Navigate'));
const Home = lazy(() => import ("../pages/Home/Home"));
const Movies = lazy(() => import ("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import ("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() =>  import ("./Cast/Cast"));
const Reviews = lazy(() => import ("./Reviews/Reviews"));


export const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
       <Navigate />
      </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
    </div>
  );
};