import React, { useState, useEffect } from "react";
import axios from "axios";


const initialMovie = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    actors: []
}

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(response => setMovie(response.data))
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
            .then(response => {
                console.log(response)
                props.updateMovie(response.data)
            })
            .catch(err => console.log(err))
    }

    const handleChange = event => {
        setMovie({...movie, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <h2>Update Movie</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="title"
                        onChange={handleChange}
                        placeholder="Movie Name"
                        value={movie.title}
                    />
                    <input 
                        type="text"
                        name="director"
                        onChange={handleChange}
                        placeholder="Director Name"
                        value={movie.director}
                    />
                    <input 
                        type="text"
                        name="metascore"
                        onChange={handleChange}
                        placeholder="Metascore"
                        value={movie.metascore}
                    />
                    <input 
                        type="text"
                        name="stars"
                        onChange={handleChange}
                        placeholder="Actors Name"
                        value={movie.stars}
                    />

                </form>
            <button type="submit">Update Movie</button>
        </div>
    )
}

export default UpdateMovie;