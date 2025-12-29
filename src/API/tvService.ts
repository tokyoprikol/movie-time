import { apiClient } from "./api.ts";
import type { Response, MediaItem } from "../types.ts";

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

    static async getTopRatedTv(page = 1) {
        const response = await apiClient.get<Response>("/tv/top_rated", {
            params: {
                language: "en-US",
                page,
            },
        });
        return response.data;
    }

    static async getAiringTodayTv(page = 1) {
        const response = await apiClient.get<Response>("/tv/airing_today", {
            params: {
                language: "en-US",
                page,
            },
        });
        return response.data;
    }

    static async getOnTheAirTv(page = 1) {
        const response = await apiClient.get<Response>("/tv/on_the_air", {
            params: {
                language: "en-US",
                page,
            },
        });
        return response.data;
    }

    static async getTvById(id: number) {
        const response = await apiClient.get<MediaItem>("/tv/" + id, {
            params: {
                language: "en-US",
                append_to_response: "content_ratings,aggregate_credits,reviews",
            },
        });
        return response.data;
    }
}
