// import React, { useState } from "react";
// import axios from "axios";

// const initialState = {
//     id: Date.now(),
//     title: "",
//     director: "",
//     metascore: "",
//     stars: []

// }
// const AddMovie = (props) => {
//     const [newMovie, setNewMovie] = useState(initialState)

//     const handleSubmit = event => {
//         event.preventDefault();
        
//             axios
//                 .post(`http://localhost:5000/api/movies/add-movie`, newMovie)
//                 .then(response => {
//                     console.log("Add Movie: ", response)
//                     setNewMovie(response.data)
//                 .then(setNewMovie({
//                     title: "",
//                     director: "",
//                     metascore: "",
//                     stars: []
//                     }))
//             props.history.push("/")
//         })
    
// }

//     const handleChange = event => {
//         setNewMovie({...newMovie, [event.target.name]: event.target.value })
//     }
//     return(
//     <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <h2 className="movie-update">Add Movie</h2>
//                     <input 
//                         type="text"
//                         name="title"
//                         onChange={handleChange}
//                         placeholder="Movie Name"
//                         value={props.title}
//                     />
//                     <div />
//                     <input 
//                         type="text"
//                         name="director"
//                         onChange={handleChange}
//                         placeholder="Director Name"
//                         value={props.director}
//                     />
//                     <div />
//                     <input 
//                         type="text"
//                         name="metascore"
//                         onChange={handleChange}
//                         placeholder="Metascore"
//                         value={props.metascore}
//                     />
//                     <div />
//                     <input 
//                         type="text"
//                         name="stars"
//                         onChange={handleChange}
//                         placeholder="Actors Name"
//                         value={props.stars}
//                     />
//                     <button className="update-button-2">Add Movie</button>
//                 </form>
            
//         </div>
//     )
// }

// export default AddMovie;