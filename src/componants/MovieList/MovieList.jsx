import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({}) => {
  const movies = ["Princess Bride", "Iron Man", "Pulp Fiction", "Enders Game"];
  const movieItems = movies.map((movie) => (
    <MovieItem key={movie} title={movie} />
  ));
  return (
    <div className="flex-item">
      <h4>My Movies</h4>
      <div className="infoText">{movieItems}</div>
    </div>
  );
};

export default MovieList;
