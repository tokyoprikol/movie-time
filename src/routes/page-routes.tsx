import Main from "../pages/Main";
import MoviePopularPage from "../pages/MoviePages/MoviePopularPage";
import MovieTopRatedPage from "../pages/MoviePages/MovieTopRatedPage";
import MovieUpcomingPage from "../pages/MoviePages/MovieUpcomingPage";

export const routes = [
    { path: "/", element: <MoviePopularPage /> },
    { path: "/movie/popular", element: <MoviePopularPage /> },
    { path: "/movie/top-rated", element: <MovieTopRatedPage /> },
    { path: "/movie/upcoming", element: <MovieUpcomingPage /> },
];
