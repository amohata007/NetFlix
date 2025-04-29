import React, { useEffect } from "react";
import MovieList from "./MovieList";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const SecondaryContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store?.movies);
  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_Options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
    console.log(json?.results, "Check");
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className="bg-black">
      <div className="-mt-32 relative z-20 pl-6">
        <MovieList heading={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList heading={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList heading={"Trending"} movies={movies?.nowPlayingMovies} />

        <MovieList heading={"Upcoming Movies"} movies={movies?.popularMovies} />
      </div>
      {/* <MovieList heading={"Popular Movies"} /> */}
    </div>
  );
};

export default SecondaryContainer;
