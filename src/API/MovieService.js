import axios from "axios";

export class MovieService {
    static async getPopularMovies() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
            headers: {
                accept: 'application/json',
            },
        });
        return response.data;
    }
}