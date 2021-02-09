import React from "react";
import { Form, Button, Container, Row, Col, Badge } from "react-bootstrap";
import useCustomForm from "./../../../utils/useCustomForm";
import API from "./../../../api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { tenantSchema } from "./../../schemas/schemas";

const Inquilino = (props) => {
  const [values, handler, setValues] = useCustomForm();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(tenantSchema),
  });

  const registro = async () => {
    setValues([values]);
    const res = await API.post(`tenant`, values);
    props.history.push(`/medical-info/${res.data}`);
  };

  return (
    <>
      <Container>
        <h2 className="text-info text-center mb-4 mt-4">
          {" "}
          <Badge variant="secondary">Inquilino</Badge>{" "}
        </h2>
        <Form
          className="justify-content-center m-auto col-sm-6"
          onSubmit={handleSubmit(registro)}
        >
          <Row>
            <Col>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                  ref={register}
                  size="sm"
                  onChange={handler}
                  value={values.name || ""}
                  name="name"
                  type="name"
                  placeholder="Nombre"
                />
                <label className="text-danger">{errors.name?.message}</label>
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
                <label className="text-danger">
                  {errors.last_name?.message}
                </label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicBrithday">
                <Form.Label>Fecha de Nacimiento: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.birth_date || ""}
                  name="birth_date"
                  type="date"
                  placeholder="Fecha de Nacimiento"
                />
                <label className="text-danger">
                  {errors.birth_date?.message}
                </label>
              </Form.Group>
            </Col>
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
                <label className="text-danger">{errors.dni?.message}</label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Telefono:</Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.phone || ""}
                  name="phone"
                  type="text"
                  placeholder="Casa o movil"
                />
                <label className="text-danger">{errors.phone?.message}</label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicVehicle">
                <Form.Label>Pantente: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.vehicle_registration_number || ""}
                  name="vehicle_registration_number"
                  type="text"
                  placeholder="Patente"
                />
                <label className="text-danger">
                  {errors.vehicle_registration_number?.message}
                </label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.email || ""}
                  name="email"
                  type="mail"
                  placeholder="ejemplo@ejemplo.com"
                />
                <label className="text-danger">{errors.email?.message}</label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicAddress">
                <Form.Label>Dirección: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.address || ""}
                  name="address"
                  type="text"
                  placeholder="Calle nro, localidad, provincia"
                />
                <label className="text-danger">{errors.address?.message}</label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit" className="btn btn-success">
                Siguiente
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Inquilino;
