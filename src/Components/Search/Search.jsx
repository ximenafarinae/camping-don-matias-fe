import React from "react";
import {
  Form,
  FormControl,
  InputGroup,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import useCustomForm from "./../../utils/useCustomForm";
import { Link } from "react-router-dom";

const Search = () => {
  const [values, handleChange, setValues] = useCustomForm();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <FormControl
                  type="text"
                  name="search"
                  value={values.search}
                  placeholder="Buscar inquilino"
                  onChange={handleChange}
                />
                <InputGroup.Append>
                  <Link type="submit" to={`/search/${values.search}`}>
                    <Button type="submit" variant="outline-success">
                      Buscar
                    </Button>
                  </Link>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(Search);
