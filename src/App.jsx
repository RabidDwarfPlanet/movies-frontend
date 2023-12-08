import "./App.css";
import Header from "./componants/Header/Header.jsx";
import MovieList from "./componants/MovieList/MovieList.jsx";
import MovieInfo from "./componants/MovieInfo/MovieInfo.jsx";
import NewMovieForm from "./componants/NewMovieForm/NewMovieForm.jsx";

function App() {
  const selectedMovie = {
    title: "Princess Bride",
    runningTime: 13,
    genre: "Romantic Genre",
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm />
      </div>
    </div>
  );
}

export default App;
