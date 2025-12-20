import { apiClient } from "./api.ts";
import type { tmdbItem } from "../types.ts";

interface Response {
    page: number;
    results: tmdbItem[];
    total_pages: number;
    total_results: number;
}

export class tvService {
    static async getPopularTv(page = 1) {
        const response = await apiClient.get<Response>("/tv/popular", {
            params: {
                language: "en-US",
                page,
            },
        });
        return response.data;
    }
}
