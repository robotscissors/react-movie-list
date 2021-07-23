import { useState } from 'react';

// REACT BOOTSTRAP
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';

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
                <FormGroup >
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <FormControl
                        type="text"
                        name="title"
                        onChange={({ target }) => onInputChange(target)}
                    />
                </FormGroup>
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
                <Button type="submit" disabled={ !formData.title }>submit</Button>
            </Form>
        </div>
    );
}