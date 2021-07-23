import { StyledMovieCard, MovieImage } from './styled'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

export const MovieCard = ({ movie, showDetails }) => {
    return (
        <StyledMovieCard 
            key={movie.imdbID}
        >
            <MovieImage
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                fluid
            />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Button
                    onClick={() => showDetails(movie.imdbID)}
                >
                    Show Details
                </Button>
            </Card.Body>
        </StyledMovieCard>
    );
}