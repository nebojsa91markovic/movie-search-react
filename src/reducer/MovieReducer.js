export const progress = {
  movies: [],
  loading: false,
  errMsg: null,
};

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE_REQUEST":
      console.log(action);
      console.log(state);
      return {
        ...state,
        loading: true,
        errMsg: null,
      };
    case "SEARCH_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIE_ERROR":
      return {
        ...state,
        loading: false,
        errMsg: action.error,
      };
    default:
      return state;
  }
};
