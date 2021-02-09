import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Tenant from "./../../Tenant";
import { useGet } from "./../../../utils/useHTTP";
import Loading from "../../Spinner";
const List = (props) => {
  const [tenants, isLoading, error] = useGet({
    url: `tenant`,
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: "2em",
                paddingBottom: "2em",
              }}
            >
              <Button
                variant="outline-success"
                onClick={() => {
                  props.history.push(`/tenant`);
                }}
              >
                Agregar nuevo
              </Button>
            </div>

            <Table striped bordered hover size="sm" className="mr-4">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>DNI</th>
                  <th>Telefono</th>
                  <th>Patente</th>
                  <th>Email</th>
                  <th>Más</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <Loading></Loading>
                  </tr>
                ) : (
                  tenants.map((tenant) => (
                    <Tenant
                      to={`/tenant-detail/${tenant.id}`}
                      key={tenant.id}
                      {...tenant}
                    />
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default List;
