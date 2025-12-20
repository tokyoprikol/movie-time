export interface MediaItem {
    id: number;
    poster_path: string;
    overview: string;
    genre_ids: number[];

    title?: string; // for Movie
    release_date?: string; // for Movie

    name?: string; // for TvShow
    first_air_date?: string; // for TvShow
}

export interface Genre {
    id: number;
    name: string;
}
