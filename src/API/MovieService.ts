import axios from "axios";
import { apiClient } from "./api.ts";
import type { Movie } from "../types.ts";

interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
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
}
