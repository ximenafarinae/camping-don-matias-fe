import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Loading from "../Spinner";
import Tenant from "../Tenant";
import { useGet } from "./../../utils/useHTTP";

const SearchResults = ({ match }) => {
  const name = match.params.name;
  const [data, isLoading, error] = useGet({
    url: `tenant/search/${name}`,
  });
  return (
    <>
      <Row className="m-auto">
        <Col sm={9} className="m-auto">
          <Table striped bordered hover size="sm" className="mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Teléfono</th>
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
                data.map((tenant) => (
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
    </>
  );
};

export default SearchResults;
