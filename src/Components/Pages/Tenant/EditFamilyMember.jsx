import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DeleteButton from "./../../ButtonDelete";
import useCustomForm from "./../../../utils/useCustomForm";
import { usePut, useDelete } from "./../../../utils/useHTTP";
import { useForm } from "react-hook-form";
import { schemaFamilyMember } from "./../../schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import API from "./../../../api";

const EditFamilyMember = ({ match, history }) => {
  const id = match.params.id;
  const [values, handler, setValues] = useCustomForm();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaFamilyMember),
  });
  const [deleted, error, eliminate] = useDelete();

  const [res, errorsState, executePut] = usePut();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getMembers = async () => {
      const res = await API.get(`familyMember/edit/${id}`);
      setValues(res.data);
    };
    getMembers();
  }, []);

  const update = (e) => {
    // e.preventDefault();
    // setValues(values); //Tiene sentido??
    executePut(`familyMember/${id}`, values);
    history.goBack();
  };
  const handleDelete = () => {
    eliminate(`familyMember/${id}`);
    setShow(false);
    history.goBack();
  };
  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(update)}
        className="justify-content-center m-auto col-sm-6"
      >
        <Container>
          <Row>
            <Col>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.name || ""}
                  name="name"
                  type="name"
                  placeholder="Nombre"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Apellido: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.last_name}
                  name="last_name"
                  type="name"
                  placeholder="Apellido"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicDni">
                <Form.Label>DNI: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.dni}
                  name="dni"
                  type="text"
                  placeholder="DNI"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicAge">
                <Form.Label>Edad: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.age}
                  name="age"
                  type="text"
                  placeholder="Edad"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className=" d-flex p-2 justify-content-end">
            <Col>
              <Button
                className="btn btn-success"
                variant="primary"
                type="submit"
              >
                Aceptar
              </Button>
            </Col>
            <Col>
              <DeleteButton
                show={show}
                setShow={setShow}
                handleDelete={handleDelete}
              ></DeleteButton>
            </Col>
            <Col>
              <Button
                className="btn btn-info"
                variant="info"
                onClick={handleCancel}
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default EditFamilyMember;
