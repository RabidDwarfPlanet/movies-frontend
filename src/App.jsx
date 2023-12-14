import "./App.css";
import Header from "./componants/Header/Header.jsx";
import MovieList from "./componants/MovieList/MovieList.jsx";
import MovieInfo from "./componants/MovieInfo/MovieInfo.jsx";
import NewMovieForm from "./componants/NewMovieForm/NewMovieForm.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchMovies = async () => {
    try {
      const responce = await axios.get("https://localhost:7151/api/Movies")
      // console.log(responce);
      setMovies(responce.data)
    }
    catch (error) {
      console.warn("Error in fetchMovies request: ", error)
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  };
  

  const selectedMovie = movies[activeIndex];

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList
          movies={movies}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm onNewMovie={handleNewMovie} />
      </div>
    </div>
  );
}

export default App;
