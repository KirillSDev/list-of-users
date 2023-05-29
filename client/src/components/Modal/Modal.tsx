import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IModal } from './Modal.props';
export const ModalComponent: FC<IModal> = ({ message, show, closeModal }): JSX.Element => {
    return (
        <>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button variant='warning' onClick={closeModal}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
