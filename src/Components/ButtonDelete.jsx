import React from "react";
import { Modal, Button } from "react-bootstrap";
const DeleteButton = ({ show, setShow, handleDelete }) => {
  const handleClose = () => setShow(false);
  const handleShow = () =>{
   setShow(true);   
  } 

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Eliminar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atención</Modal.Title>
        </Modal.Header>
        <Modal.Body>Estas a punto de eliminar este elemento, deseas continuar?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteButton;
