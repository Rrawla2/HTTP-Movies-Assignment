import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import axios from "axios";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movie, setMovie] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  
  const updateMovie = movie => {
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(response => {
        console.log(response)
        setMovie(response.data)
        
      })
      .catch(err => console.log("Error", err))
  }

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => <MovieList {...props} movie={movie}/> } />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} updateMovie={updateMovie} savedList={savedList} addToSavedList={addToSavedList} />
        }}
        />
    </>
  );
};

export default App;
