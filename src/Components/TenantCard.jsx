import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import moment from "moment";

const TenantCard = (props) => {
  const id = props.id;
  const {
    name,
    last_name,
    birth_date,
    dni,
    vehicle_registration_number,
    phone,
    email,
    address,
  } = props.data;
  return (
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
              {name} {last_name}
            </span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="text-success font-weight-bold">Fec. de Nac.:</span>
            {"  "}
            <span>
              {birth_date ? moment(birth_date).format("DD/MM/YYYY") : ""}
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
            <span className="text-success font-weight-bold">Teléfono:</span>{" "}
            <span>{phone}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="text-success font-weight-bold">
              Correo electrónico:
            </span>{" "}
            <span>{email}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="text-success font-weight-bold">Dirección:</span>{" "}
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
  );
};

export default TenantCard;
