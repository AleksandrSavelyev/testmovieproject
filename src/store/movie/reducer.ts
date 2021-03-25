import { HYDRATE } from 'next-redux-wrapper';
import ActionTypes from './actionTypes';
import { IMovie } from './types';

export interface IMovies {
    movies: IMovie[];
    loaded: boolean;
    filters: Filters,
    sortBy: string,
    languages: Array<string>,
    sortedByValue: string,
    searchMovieName: string,
}

export type Filters = {
    'sort_by': string,
    'language': string,
    'release_date.gte': string,
    'release_date.lte': string,
    'vote_average.lte': string,
}

const initialState: IMovies = {
    movies: [],
    loaded: false,
    searchMovieName: '',
    languages: ['en-US'],
    sortBy: 'popularuty',
    filters: {
        'release_date.gte': new Date().toISOString().slice(0, 10),
        'release_date.lte': new Date().toISOString().slice(0, 10),
        'language': 'en-US',
        'sort_by': 'popularity',
        'vote_average.lte': '10',
    },
    sortedByValue: '',
};

export type Action = {
    type: string;
    payload?: any;
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
    case HYDRATE: {
        return { ...state, ...action.payload };
    }
    case ActionTypes.GET_MOVIES_REQUEST: {
        return {
            ...state,
            loaded: true,
        };
    }
    case ActionTypes.SET_FILTER_INFO: {
        return {
            ...state,
            filters: {
                ...state.filters,
                [action.payload.filter]: action.payload.value,
            },
            loaded: false,
        };
    }
    case ActionTypes.SET_LANGUAGES_TO_STORE: {
        return {
            ...state,
            loaded: false,
            languages: action.payload,
        };
    }
    case ActionTypes.SET_SORT_BY_TO_STORE: {
        return {
            ...state,
            loaded: false,
            sortBy: action.payload,
        };
    }
    case ActionTypes.SET_MOVIES_STORE: {
        return {
            ...state,
            loaded: false,
            movies: action.payload,
        };
    }
    case ActionTypes.SEARCH_MOVIE_NAME: {
        return {
            ...state,
            searchMovieName: action.payload
        }
    }
    case ActionTypes.SET_FILTER_INFO: {
        return {
            ...state,
            filter: {
                ...state.filters,
                [action.payload.filters]: action.payload,
            },
            loaded: false,
        };
    }
    case ActionTypes.GET_INITIAL_STATE: {
        return {
            ...state,
            loaded: false,
            movies: initialState,
        }
    }
    default:
        return {
            ...state,
        };
    }
};

export default reducer;
