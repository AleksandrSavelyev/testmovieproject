import { createSelector } from 'reselect';
import { IMovies, Filters } from './reducer';

export const getMovies = (state: IMovies) => state.movies;
export const getSortBy = (state: IMovies) => state.sortBy;
export const getFilters = (state: IMovies) : Filters => state.filters;
export const getLanguages = (state: IMovies) => state.languages;
export const getFirstDate = (state: IMovies) => state.filters['release_date.gte'];
export const getSecondDate = (state: IMovies) => state.filters['release_date.lte'];
export const getVoteAverage = (state: IMovies) => state.filters['vote_average.lte'];
export const getSearchMovieName = (state: IMovies) => state.searchMovieName;
export const getCurrentLanguage = (state:IMovies) => state.filters['language'];

export const sortedMoviesSelector = createSelector(
    [getMovies, getSearchMovieName],
    ( movies, searchMovieName ) =>
        movies.filter(({ original_title }) => original_title.toLowerCase().includes(searchMovieName))
);

export const getLanguagesSelector = createSelector(
    getLanguages,
    ( languages ) =>
        languages.map((item) => { return { language: item } })
);

export const getVoteAverageNumber = createSelector(
    getVoteAverage,
    ( vote_average ) => { return Number(vote_average) }
);