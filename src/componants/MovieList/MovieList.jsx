import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({movies = []}) => {
  const MovieItems = movies.map((movie) => (
    <MovieItem key={movie.title} title={movie.title} />
  ));
  return (
    <div className="flex-item">
      <h4>My Movies</h4>
      <div className="infoText">{MovieItems}</div>
    </div>
  );
};

export default MovieList;
