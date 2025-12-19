export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    genre_ids: number[];
}

export interface Genre {
    id: number;
    name: string;
}
