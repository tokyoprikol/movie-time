import { apiClient } from "./api.ts";
import type { MediaItem } from "../types.ts";

interface Response {
    page: number;
    results: MediaItem[];
    total_pages: number;
    total_results: number;
}

export class movieService {
    static async getPopularMovies(page = 1) {
        const response = await apiClient.get<Response>("/movie/popular", {
            params: {
                language: "en-US",
                page,
            },
        });
        return response.data;
    }

    static async getTopRatedMovies(page = 1) {
        const response = await apiClient.get<Response>("/movie/top_rated", {
            params: {
                language: "en-US",
                page,
            },
        });
        return response.data;
    }

    static async getUpcomingMovies(page = 1) {
        const response = await apiClient.get<Response>("/movie/upcoming", {
            params: {
                language: "en-US",
                page,
            },
        });
        return response.data;
    }
}
