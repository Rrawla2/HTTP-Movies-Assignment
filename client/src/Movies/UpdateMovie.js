import React, { useState, useEffect } from "react";
import axios from "axios";


const initialItem = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
}

const UpdateMovie = (props) => {
    const [item, setItem] = useState(initialItem);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(response => setItem(response.data))
    }, [props.items, props.match.params.id])

    const handleSubmit = event => {
        event.preventDefault();
        props.updateMovie(item)
        props.history.push("/")
    }

    const handleChange = event => {
        setItem({...item, [event.target.name]: event.target.value })
    }

    return (
        <div className="container">
            <h2 className="movie-update">Update Movie</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="title"
                        onChange={handleChange}
                        placeholder="Movie Name"
                        value={item.title}
                    />
                    <div />
                    <input 
                        type="text"
                        name="director"
                        onChange={handleChange}
                        placeholder="Director Name"
                        value={item.director}
                    />
                    <div />
                    <input 
                        type="text"
                        name="metascore"
                        onChange={handleChange}
                        placeholder="Metascore"
                        value={item.metascore}
                    />
                    <div />
                    <input 
                        type="text"
                        name="stars"
                        onChange={handleChange}
                        placeholder="Actors Name"
                        value={[item.stars]}
                    />
                    <button className="update-button-2">Update</button>
                </form>
            
        </div>
    )
}

export default UpdateMovie;