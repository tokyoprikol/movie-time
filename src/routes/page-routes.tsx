// import Main from "../pages/Main";
import MoviePopularPage from "../pages/MoviePages/MoviePopularPage";
import MovieTopRatedPage from "../pages/MoviePages/MovieTopRatedPage";
import MovieUpcomingPage from "../pages/MoviePages/MovieUpcomingPage";

import TvPopularPage from "../pages/TvPages/TvPopularPage";
import TvTopRatedPage from "../pages/TvPages/TvTopRatedPage";
import TvOnTheAirPage from "../pages/TvPages/TvOnTheAirPage";
import TvAiringTodayrPage from "../pages/TvPages/TvAiringTodayPage";

export const routes = [
    { path: "/", element: <MoviePopularPage /> },
    { path: "/movie/popular", element: <MoviePopularPage /> },
    { path: "/movie/top-rated", element: <MovieTopRatedPage /> },
    { path: "/movie/upcoming", element: <MovieUpcomingPage /> },

    { path: "/tv/popular", element: <TvPopularPage /> },
    { path: "/tv/top-rated", element: <TvTopRatedPage /> },
    { path: "/tv/on-the-air", element: <TvOnTheAirPage /> },
    { path: "/tv/airing-today", element: <TvAiringTodayrPage /> },
];
