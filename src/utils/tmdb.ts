const tmdbPosterBaseUrl = 'https://image.tmdb.org/t/p/';

export const getPoster = (path: string, size: string = 'w185') => {
        return `${tmdbPosterBaseUrl}${size}${path}`; 
    }