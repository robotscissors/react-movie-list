import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


export const StyledMovieCard = styled(Card)`
    h5 {
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }
`;

export const MovieImage = styled(Image)`
    height: 100%;
    width: 100%;
`;