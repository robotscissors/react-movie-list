import { useState } from 'react';

import { MovieCard } from '../MovieCard';
import { DetailsModal } from '../DetailsModal';
import { MovieDetails } from '../MovieDetails';
import { AddMovieToList } from '../AddMovieToList';

import { MovieListContainer } from './styled';

export const MovieList = ({ movies }) => {
    const [movieDetailsId, setMovieDetailsId] = useState(null);

    const onDetailsModalClose = () => {
        setMovieDetailsId(null);
    }

    const renderDetailsModal = () => (
        <DetailsModal
            show={!!movieDetailsId}
            onClose={onDetailsModalClose}
        >
            <MovieDetails id={movieDetailsId} />
        </DetailsModal>
    );

    const renderMovies = () => movies.map((movie) => (
        <MovieCard
            key={ movie.imdbID }
            movie={movie}
            showDetails={(id) => setMovieDetailsId(id)}
        />
    ));

    return (
        <MovieListContainer>
            {
                movieDetailsId
                    ? renderDetailsModal()
                    : renderMovies()
            }
        </MovieListContainer>
    );
};