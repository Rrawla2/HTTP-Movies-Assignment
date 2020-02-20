import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

export default function MovieList(props) {
  const [movies, setMovies] = useState([])
  const [newMovie, setNewMovie] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => {
        //console.log("Movie: ", res)
        setMovies(res.data)})
      .catch(err => console.log(err.response));
    }, [])

    useEffect(() => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(res => {
          //console.log("Movie: ", res)
          setMovies(res.data)})
        .catch(err => console.log(err.response));
      }, [props.movie])

    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
        {newMovie.map(newmovie => {
          console.log("newmovie: ", newmovie)
            return <AddMovie key={newmovie.id} newmovie={newmovie} />;
        })}
      </div>
    );
  }


function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
