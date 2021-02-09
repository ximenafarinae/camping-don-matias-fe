import React from "react";
import { Form, Button, Col, Row, Badge, Container } from "react-bootstrap";
import useCustomForm from "./../utils/useCustomForm";
import { useForm } from "react-hook-form";
import { usePost } from "./../utils/useHTTP";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaFamilyMember } from "./../Components/schemas/schemas";

const FamilyForm = ({ id, match, history, setMembers, readonly }) => {
  const [values, handler, setValues] = useCustomForm();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaFamilyMember),
  });

  const [data, error, execute] = usePost();

  const registro = () => {
    setValues([values]);
    setMembers([values]);
    execute(`familyMember/${id}`, values);
    setValues({});
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <h4 className="text-info text-center m-4">
        <Badge variant="secondary">Miembro de familia</Badge>
      </h4>
      <Form
        className="justify-content-center m-auto col-sm-12"
        onSubmit={handleSubmit(registro)}
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
                  value={values.last_name || ""}
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
                  value={values.dni || ""}
                  name="dni"
                  type="text"
                  placeholder="Nro de documento"
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
                  value={values.age || ""}
                  name="age"
                  type="text"
                  placeholder="Edad"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className=" d-flex p-2 justify-content-end">
            <Button
              className="btn btn-primary mr-1"
              variant="info"
              onClick={handleCancel}
            >
              Salir
            </Button>
            <Button className="btn btn-success" variant="primary" type="submit">
              Aceptar
            </Button>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default FamilyForm;
