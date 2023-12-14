import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({movies = [], activeIndex, setActiveIndex}) => {
  const MovieItems = movies.map((movie, i) => (
    <MovieItem 
      key={movie.title} 
      title={movie.title} 
      activeIndex={activeIndex} 
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));
  return (
    <div className="flex-item">
      <h4>My Movies</h4>
      <div className="infoText">{MovieItems}</div>
    </div>
  );
};

export default MovieList;
