import { apiClient } from "./api.ts";
import type { Genre } from "../types.ts";

interface GenreResponse {
    genres: Genre[];
}

export class genreService {
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
