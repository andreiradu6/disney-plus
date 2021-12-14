import React, {useState} from 'react'
import firebase from '../firebase'

function AddMovies() {

    const [multipleInput,setMultipleInputs] = useState({
        movieId: '',
        backdropPath: '',
        posterPath: '',
        description: '',
        title: ''
    });

    const handleChange = (event) => {
        const value = event.target.value;
        
        if(event.target.name === 'backdropPath' || event.target.name === 'posterPath'){
            setMultipleInputs({
                ...multipleInput,
                [event.target.name] : "/" + value
            });
        } else {
            setMultipleInputs({
                ...multipleInput,
                [event.target.name] : value
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        for(const detail in multipleInput){
            if(!multipleInput[detail]){
                alert('you have empty fields, check them again');
                return;
            }
        }
        
        console.log('inserted movie details are: ', multipleInput);
        const moviesRef = firebase.database().ref('Movie');
        moviesRef.push(multipleInput);
        setMultipleInputs({
          movieId: "",
          backdropPath: "",
          posterPath: "",
          description: "",
          title: "",
        });
        alert('movie added to db');
    }

    return (
        <div>
            <h1>Add Movies</h1>
            <input type="number" id="movieId" name="movieId" placeholder="movie id" onChange={handleChange} value={multipleInput.movieId}/>
            <input type="text" name="backdropPath" placeholder="backdrop path" onChange={handleChange} value={multipleInput.backdropPath}/>
            <input type="text" name="posterPath" placeholder="poster path" onChange={handleChange} value={multipleInput.posterPath}/>
            <input type="text" name="description" placeholder="description" onChange={handleChange} value={multipleInput.description}/>
            <input type="text" name="title" placeholder="title" onChange={handleChange} value={multipleInput.title}/>
            <button onClick={handleSubmit}>
                Add Movie to DB
            </button>
        </div>
    )
}

export default AddMovies

