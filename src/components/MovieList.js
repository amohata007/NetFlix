import MovieCard from "./MovieCard";

const MovieList = ({ heading, movies }) => {
  return (
    <div className="px-4 ">
      <h1 className="text-white text-2xl font-bold px-4 py-2">{heading}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex mx-4">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
