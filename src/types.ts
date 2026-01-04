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
    reviews: {
        results: Review[];
    };

    // for Movie
    title?: string;
    release_date?: string;
    credits?: {
        cast: Cast[];
    };
    release_dates?: {
        results: MovieContentRating[];
    };

    // ********

    // for TvShow
    name?: string;
    first_air_date?: string;
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
    aggregate_credits?: {
        cast: Cast[];
    };

    // ********
}

export interface Genre {
    id: number;
    name: string;
}

export interface ContentRating {
    iso_3166_1: string;
    rating: string;
}

export interface MovieContentRating {
    iso_3166_1: string;
    release_dates: {
        certification: string;
    }[];
}

export interface Cast {
    id: number;
    name: string;
    profile_path: string;
    roles?: {
        character: string;
        episode_count: number;
    }[];
    character?: string;
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

export interface User {
    email: string;
    password: string;
}
