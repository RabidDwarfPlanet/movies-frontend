import React, { useState } from "react";
import axios from "axios";

const NewMovieForm = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      runningTime,
      genre,
    };

    try {
      const responce = await axios.post(
        "https://localhost:7151/api/Movies",
        formData
      );
      if (responce.status === 201) onNewMovie();
    } catch (error) {
      console.warn("Error submitting new movie form: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Movie</h4>
      <div>
        <label>Title</label>
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Running Time</label>
        <br />
        <input
          value={runningTime}
          onChange={(e) => setRunningTime(e.target.value)}
        />
      </div>
      <div>
        <label>Genre</label>
        <br />
        <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className="d-flex justify-content-end">
      <button type="submit" className="btn btn-primary">Add Movie</button>
      </div>
    </form>
  );
};

export default NewMovieForm;
