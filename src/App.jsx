import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterRating, setFilterRating] = useState('');

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    };

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && 
        (filterRating === '' || movie.rating >= filterRating)
    );

    return (
        <div className="app">
            <h1>Movie App</h1>
            <Filter 
                filterTitle={filterTitle} 
                setFilterTitle={setFilterTitle} 
                filterRating={filterRating} 
                setFilterRating={setFilterRating} 
            />
            <MovieList movies={filteredMovies} />
            <AddMovieForm addMovie={addMovie} />
        </div>
    );
};

export default App;
