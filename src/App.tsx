import Header from "./components/Header";
import Main from "./pages/Main";
import { Routes, Route } from "react-router";
import MoviePopularPage from "./pages/MoviePages/MoviePopularPage";
import MovieTopRatedPage from "./pages/MoviePages/MovieTopRatedPage";
import MovieUpcomingPage from "./pages/MoviePages/MovieUpcomingPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movie/popular" element={<MoviePopularPage />} />
                <Route
                    path="/movie/top-rated"
                    element={<MovieTopRatedPage />}
                />
                <Route path="/movie/upcoming" element={<MovieUpcomingPage />} />
            </Routes>
        </>
    );
}

export default App;
