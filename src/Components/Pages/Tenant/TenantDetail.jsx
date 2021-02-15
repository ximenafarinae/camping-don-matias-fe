import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Members from "../../Members";
import Diseases from "./../../Diseases";
import { useGet } from "./../../../utils/useHTTP";
import TenantCard from "./../../TenantCard";
const TenantDetail = (props) => {
  const id = props.match.params.id;
  const [data, isLoading, error] = useGet({
    url: `tenant/${id}`,
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <TenantCard {...props} id={id} data={data}></TenantCard>
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
