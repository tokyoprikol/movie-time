export interface Response {
    page: number;
    results: MediaItem[];
    total_pages: number;
    total_results: number;
}

export interface MediaItem {
    id: number;
    poster_path: string;
    overview: string;
    genre_ids: number[];
    backdrop_path: string;

    title?: string; // for Movie
    release_date?: string; // for Movie

    name?: string; // for TvShow
    first_air_date?: string; // for TvShow
    genres?: Genre[];
    tagline?: string;
    created_by?: {
        id: number;
        name: string;
        profile_path?: string;
    }[];
    content_ratings?: {
        results: ContentRating[];
    };
    aggregate_credits: {
        cast: Cast[];
    };
    reviews: {
        results: Review[];
    };
}

export interface Genre {
    id: number;
    name: string;
}

export interface ContentRating {
    iso_3166_1: string;
    rating: string;
}

export interface Cast {
    id: number;
    name: string;
    profile_path: string;
    roles: {
        character: string;
        episode_count: number;
    };
}

export interface Review {
    id: string;
    author: string;
    author_details: {
        avatar_path: string;
        name: string;
        rating: number;
        username: string;
    };
    content: string;
    created_at: string;
}
