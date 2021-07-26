import { StyledMovieCard, MovieImage } from './styled'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap';

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
                <Container style={{padding:'5px 2px'}}>
                    <Row>
                        <Col md="6">
                            <Button
                                onClick={() => showDetails(movie.imdbID)}
                            >
                                Show Details
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </StyledMovieCard>
    );
}