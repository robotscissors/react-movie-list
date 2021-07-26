import { useState } from 'react';

// REACT BOOTSTRAP
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';

export const SearchBar = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: null,
        type: "movie",
    });

    const onInputChange = ({ name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <div>
            <Form onSubmit={(e) => onFormSubmit(e)} >
                <Container>
                    <Row>
                      <Col md='8'>
                        <FormGroup >
                            <FormLabel htmlFor="title">Title</FormLabel>
                            <FormControl
                                type="text"
                                name="title"
                                onChange={({ target }) => onInputChange(target)}
                            />
                        </FormGroup>
                      </Col>
                      <Col md='3'>
                        <FormGroup>
                            <FormLabel htmlFor="type">Type</FormLabel>
                            <Form.Select
                                name="type"
                                onChange={({target}) => onInputChange(target)}
                            >
                                <option value="movie">Movie</option>
                                <option value="tvShow">TV Show</option>
                            </Form.Select>
                        </FormGroup>
                        </Col>
                        <Col md='1' className="align-self-end">
                        <Button type="submit" disabled={ !formData.title }>submit</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    );
}