enum ActionTypes {
    SORT_BY = '@@movie/SORT_BY',
    GET_SORT_BY = '@@movie/GET_SORT_BY',
    GET_LANGUAGES = '@@movie/GET_LANGUAGES',
    SET_ID_TO_STORE = '@@movie/SET_ID_TO_STORE',
    SET_FILTER_INFO = '@@movie/SET_FILTER_INFO',
    SEND_FILTER_INFO = '@@movie/SEND_FILTER_INFO',  
    SET_MOVIES_STORE = '@@movie/SET_MOVIES_STORE',
    SET_MOVIE_GENRES = '@@movie/SET_MOVIE_GENRES',
    SEARCH_MOVIE_NAME = '@@movie/SEARCH_MOVIE_NAME',
    GET_SORTED_MOVIES = '@@movie/GET_SORTED_MOVIES',
    SET_SORTED_MOVIES = '@@movie/SET_SORTED_MOVIES',
    GET_INITIAL_STATE = '@@movie/GET_INITIAL_STATE',
    GET_MOVIES_REQUEST = '@@movie/GET_MOVIE_REQUEST',
    GET_DISCOVER_MOVIES = '@@movie/GET_DISCOVER_MOVIES',
    SET_SORT_BY_TO_STORE = '@@movie/SET_SORT_BY_TO_STORE',
    GET_MOVIE_INFO_BY_ID = '@@movie/GET_MOVIE_INFO_BY_ID',
    SET_LANGUAGES_TO_STORE = '@@movie/SET_LANGUAGES_TO_STORE',
    GET_NOW_PLAYING_MOVIES = '@@movie/GET_NOW_PLAYING_MOVIES',
    SET_MOVIE_INFO_TO_STORE ='@@movie/SET_MOVIE_INFO_TO_STORE',
    SET_REVIEW = '@@movie/SET_REVIEW',
    GET_REVIEW = '@@movie/GET_REVIEW',
    SET_ON_PRESSED = '@@movie/SET_ON_PRESSED',
}

export default ActionTypes;