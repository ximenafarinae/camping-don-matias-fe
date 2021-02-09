import React from "react";
import { Col, Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGet } from "./../utils/useHTTP";
import Loading from "./Spinner";

const Diseases = ({ id }) => {
  const [data, isLoading, error] = useGet({
    url: `medicalInfo/${id}`,
  });
  const {
    health_insurance,
    pre_existing_diseases,
    diseases_detail,
    allergies,
    allergies_detail,
    emergency_contact_complete_name,
    emergency_contact_number,
  } = data;
  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <Card>
          <Card.Header className="text-success font-weight-bold justify-content-center">
            INFORMACION MEDICA
          </Card.Header>
          <Card.Body>
            <ListGroup className="list-group-flush">
              {" "}
              <ListGroupItem>
                <span className="text-success font-weight-bold">
                  Obra social:
                </span>
                <span> {health_insurance}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span className="text-success font-weight-bold">
                  Enfermedades pre existentes:
                </span>
                {"  "}
                <span>{pre_existing_diseases}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span className="text-success font-weight-bold">
                  Detalle de enfermedades:
                </span>{" "}
                <span> {diseases_detail}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span className="text-success font-weight-bold">Alergias:</span>{" "}
                <span> {allergies}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span className="text-success font-weight-bold">
                  Detalle de alergias:
                </span>{" "}
                <span> {allergies_detail}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span className="text-success font-weight-bold">
                  Contacto de emergencia:
                </span>{" "}
                <span> {emergency_contact_complete_name}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span className="text-success font-weight-bold">Teléfono:</span>{" "}
                <span>{emergency_contact_number}</span>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Body className="d-inline-flex justify-content-end">
            <Link to={`/edit-medical-info/${id}`}>
              {" "}
              <Button
                size="sm"
                variant="outline-success"
                className="font-weight-bold"
              >
                EDITAR
              </Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Diseases;
