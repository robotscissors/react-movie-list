import { useEffect, useState } from 'react';
import MovieService from '../../services/movie.service';

import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image';

import {
    MovieContainer,
    MovieDetailsContainer,
    TitleRatingContainer
} from './styled';

export const MovieDetails = ({id}) => {
    const [movie, setMovie] = useState();

    const movieService = new MovieService();

    useEffect(() => getMovieById(id), [id]);

    const getMovieById = async (id) => {
        const movie = await movieService.getMovieById(id);

        setMovie(movie);
    }

    const renderTitleRatingContainer = () => (
        <TitleRatingContainer>
            <h2>{movie.Title}</h2>
            <Badge bg="primary">
                { movie.Ratings.length > 0 ? movie.Ratings[0].Value : "N/A" }
            </Badge>
        </TitleRatingContainer>
    );

    const renderBadges = () => (
        <div>
            <Badge bg="secondary">
                { movie.Rated }
            </Badge>
            <Badge bg="secondary">
                { movie.Runtime }
            </Badge>
            <Badge bg="secondary">
                { movie.Genre }
            </Badge>
        </div>
    );

    return movie
        ? (
            <MovieContainer>
                <Image src={movie.Poster} alt={`${movie.Title} poster`} fluid />
                <MovieDetailsContainer>
                    { renderTitleRatingContainer() }
                    { renderBadges() }
                    <div>
                        <h4>Plot</h4>
                        <p>{ movie.Plot }</p>
                    </div>
                    <div>
                        <h4>Actors</h4>
                        <p>{ movie.Actors }</p>
                    </div>
                </MovieDetailsContainer>
            </MovieContainer>
        ): null
};