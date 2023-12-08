const movieItem = ({ title }) => {
  return (
    <div className="movie-item">
      <span>{title}</span>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

const handleClick = (e) => {
  console.log(e);
};

export default movieItem;
