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
    created_by?: string;
    content_ratings?: any;
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
    roles: any;
}
