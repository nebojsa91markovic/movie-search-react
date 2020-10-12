import React, { useEffect, useState, useReducer } from "react";
import { MovieReducer, progress } from "../reducer/MovieReducer";
import API from "../config/api";
import MovieComponent from "../components/MovieComponent";
import Header from "../components/Header";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import ErrorMsg from "../components/ErrorMsg";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [state, dispatch] = useReducer(MovieReducer, progress);

  const search = (searchValue) => {
    dispatch({
      type: "Index of Some",
    });

    API.get(searchValue).then((response) => {
      if (response.data.results) {
        dispatch({
          type: "SEARCH_MOVIE_SUCCESS",
          payload: response.data.results,
        });
      }
    });
  };

  useEffect(() => {
    // API.get(`/?s=batman&${apiKey}`).then((res) => {
    API.get("batman").then((res) => {
      const movies = res.data.results;
      dispatch({ type: "SEARCH_MOVIE_SUCCESS", payload: movies });
      console.log(movies);
      setMovies(movies);
    });
  }, []);

  //   const { movies, errorMessage, loading } = state;

  //   return <div>{state.movies.map((movie, index) => MovieComponent(movie))}</div>;
  return (
    <div className="App">
      <div className="m-container">
        <Header text="Movie App Search" />
        <Search search={search} />
        <div className="movies">
          {state.loading && !state.errorMessage ? (
            <Spinner />
          ) : state.errorMessage ? (
            <ErrorMsg>{state.errorMessage}</ErrorMsg>
          ) : (
            <MovieComponent movieInfo={state.movies} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
