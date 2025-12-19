import { apiClient } from "./api.ts";
import type { Movie, Genre } from "../types.ts";

interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

interface GenreResponse {
    genres: Genre[];
}

export class MovieService {
    static async getPopularMovies(page = 2) {
        const response = await apiClient.get<MovieResponse>("/movie/popular", {
            params: {
                language: "en-US",
                page,
            },
        });
        return response.data;
    }

    static async getGenres() {
        const response = await apiClient.get<GenreResponse>(
            "/genre/movie/list",
            {
                params: {
                    language: "en-US",
                },
            },
        );
        return response.data;
    }
}
