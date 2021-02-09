import React from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Members from "../../Members";
import Diseases from "./../../Diseases";
import { useGet } from "./../../../utils/useHTTP";
import moment from "moment";

const TenantDetail = (props) => {
  const id = props.match.params.id;
  const [data, isLoading, error] = useGet({
    url: `tenant/${id}`,
  });
  const {
    name,
    last_name,
    birth_date,
    dni,
    vehicle_registration_number,
    phone,
    email,
    address,
  } = data;
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <Card>
              <Card.Header className="text-success font-weight-bold justify-content-center">
                INQUILINO
              </Card.Header>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  {" "}
                  <ListGroupItem>
                    <span className="text-success font-weight-bold">
                      Nombre y Apellido:
                    </span>
                    <span>
                      {" "}
                      {name}, {last_name}
                    </span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span className="text-success font-weight-bold">
                      Fec. de Nac.:
                    </span>
                    {"  "}
                    <span>
                      {birth_date
                        ? moment(birth_date).format("DD/MM/YYYY")
                        : ""}
                    </span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span className="text-success font-weight-bold">DNI:</span>{" "}
                    <span> {dni}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span className="text-success font-weight-bold">
                      Datos del vehiculo:
                    </span>{" "}
                    <span> {vehicle_registration_number}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span className="text-success font-weight-bold">
                      Teléfono:
                    </span>{" "}
                    <span>{phone}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span className="text-success font-weight-bold">
                      Correo electrónico:
                    </span>{" "}
                    <span>{email}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span className="text-success font-weight-bold">
                      Dirección:
                    </span>{" "}
                    <span>{address}</span>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
              <Card.Body className="d-inline-flex justify-content-end">
                <Button
                  size="sm"
                  variant="outline-success"
                  className="font-weight-bold"
                  onClick={() => {
                    props.history.push(`/edit-tenant/${id}`);
                  }}
                >
                  EDITAR
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Diseases id={id}></Diseases>
          </Col>
        </Row>
        <hr className="mt-5" />
        <Row>
          <Container className="d-inline-flex justify-content-center">
            <Row style={{ width: "100%" }}>
              <Col sm={9}>
                <h5 className="text-success mt-5 mb-4">GRUPO FAMILIAR:</h5>
              </Col>
              <Col sm={3} className="mt-5">
                <Button
                  size="sm"
                  style={{ marginLeft: "50px" }}
                  variant="outline-success"
                  onClick={() => {
                    props.history.push(`/family-member/${id}`);
                  }}
                >
                  Agregar nuevo
                </Button>
              </Col>
            </Row>
          </Container>
          <Col>
            <Members id={id}></Members>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TenantDetail;
