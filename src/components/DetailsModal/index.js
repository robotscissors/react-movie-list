import ModalBody from 'react-bootstrap/ModalBody';
import Button from 'react-bootstrap/Button';

import { CustomModalFooter, CustomModal } from './styled';

export const DetailsModal = ({ show, onClose, children }) => {

    return (
        <CustomModal show={show}>
            <ModalBody>
                { children }
            </ModalBody>
            <CustomModalFooter>
                <Button
                    type="button"
                    variant="danger"
                    onClick={onClose}
                >Close</Button>
            </CustomModalFooter>
        </CustomModal>
    );
};