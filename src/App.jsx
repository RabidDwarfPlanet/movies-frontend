import "./App.css";
import Header from "./componants/Header/Header.jsx";
import MovieList from "./componants/MovieList/MovieList.jsx";
import MovieInfo from "./componants/MovieInfo/MovieInfo.jsx";
import NewMovieForm from "./componants/NewMovieForm/NewMovieForm.jsx";
import React, { useState, useEffect } from 'react';
import initData from "./data/data.js";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(initData)
  }, [])
  
  const handleNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie]
    setMovies(updatedMovies)
  }

  const selectedMovie = {
    title: "Princess Bride",
    runningTime: 13,
    genre: "Romantic Genre",
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList movies={movies}/>
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm onNewMovie={handleNewMovie}/>
      </div>
    </div>
  );
}

export default App;
