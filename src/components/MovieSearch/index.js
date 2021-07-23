import { useState } from 'react';

import { MovieList } from '../MovieList';
import { SearchBar } from "../SearchBar"; 

import MovieService from '../../services/movie.service';

export const MovieSearch = () => {
    const [movies, setMovies] = useState();

    const movieService = new MovieService();

    const onSubmit = async (formData) => {
        const result = await movieService.getMovieByTitle(formData);

        setMovies(result.Search);
    }

    return (
        <div>
            <SearchBar onSubmit={onSubmit} />
            { movies && <MovieList movies={movies} /> }
        </div>
    );
}