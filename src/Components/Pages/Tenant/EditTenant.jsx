import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DeleteButton from "./../../ButtonDelete";
import useCustomForm from "./../../../utils/useCustomForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { tenantSchema } from "./../../schemas/schemas";
import { useDelete, usePut } from "./../../../utils/useHTTP";
import moment from "moment";
import API from "./../../../api";

const EditTenant = ({ match, history }) => {
  const id = match.params.id;
  const [values, handler, setValues] = useCustomForm();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(tenantSchema),
  });
  const [deleted, error, eliminate] = useDelete();

  const [resData, errorsState, executePut] = usePut();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getTenant = async () => {
      const res = await API.get(`tenant/${id}`);
      setValues(res.data);
    };
    getTenant();
  }, []);

  const update = (e) => {
    e.preventDefault();
    // setValues(values); //Tiene sentido??
    executePut(`tenant/${id}`, values);
    history.goBack();
  };
  const handleDelete = () => {
    eliminate(`tenant/${id}`);
    setShow(false);
    history.push("/tenant-list");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <Container>
        <Form
          className="justify-content-center m-auto col-sm-6 pt-5"
          onSubmit={handleSubmit(update)}
        >
          <Row>
            <Col>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.name}
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
              <Form.Group controlId="formBasicBrithday">
                <Form.Label>Fecha de Nacimiento: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={
                    values.birth_date
                      ? (values.birth_date = `${moment(
                          values.birth_date
                        ).format("YYYY-MM-DD")}`)
                      : ""
                  }
                  name="birth_date"
                  type="date"
                  placeholder="Fecha de Nacimiento"
                />
              </Form.Group>
            </Col>
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
                  placeholder="Nro de documento"
                />
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
                  value={values.phone}
                  name="phone"
                  type="text"
                  placeholder="Casa o movil"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicVehicle">
                <Form.Label>Pantente: </Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.vehicle_registration_number}
                  name="vehicle_registration_number"
                  type="text"
                  placeholder="Patente"
                />
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
                  value={values.email}
                  name="email"
                  type="mail"
                  placeholder="ejemplo@ejemplo.com"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicAddress">
                <Form.Label>Dirección:</Form.Label>
                <Form.Control
                  size="sm"
                  ref={register}
                  onChange={handler}
                  value={values.address}
                  name="address"
                  type="text"
                  placeholder="Ayacucho 2972, San Andres, Buenos Aires"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="SubmitButton">
              <Button
                onClick={update}
                type="submit"
                className="btn btn-success mr-5 ml-5"
              >
                Aceptar
              </Button>
              <DeleteButton
                show={show}
                setShow={setShow}
                handleDelete={handleDelete}
              ></DeleteButton>
              <Button className="btn btn-info ml-5" onClick={handleCancel}>
                Cancelar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default EditTenant;
