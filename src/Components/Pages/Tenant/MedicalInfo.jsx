import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { usePost } from "./../../../utils/useHTTP";
import { useForm } from "react-hook-form";
import useCustomForm from "./../../../utils/useCustomForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { MedicalInfoSchema } from "./../../schemas/schemas";

const MedicalInfo = (props) => {
  const id = props.match.params.id;
  const [values, handler, setValues] = useCustomForm();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(MedicalInfoSchema),
  });
  const [data, postError, execute] = usePost();

  const registro = () => {
    setValues(values);
    execute(`medicalInfo/${id}`, values); 
    props.history.push(`/family-member/${id}`);
  };
 
  return (
    <>
      <h5 className="text-info text-center">Informacion médica</h5>
      <Form className="justify-content-center m-auto col-sm-5">
        <Form.Group controlId="formBasicHealthInsurance">
          <Form.Label>Obra social:</Form.Label>
          <Form.Control
            size="sm"
            ref={register}
            onChange={handler}
            value={values.health_insurance || ""}
            name="health_insurance"
            type="name"
            placeholder="Obra social"
          />
          <label className="text-danger">
            {errors.health_insurance?.message}
          </label>
        </Form.Group>
        <Form.Group
          controlId="formBasicPreExintingDiseases"
          ref={register}
          onChange={handler}
          value={values.pre_existing_diseases || ""}
        >
          <Form.Label>Enfermedades pre-existentes </Form.Label>

          <Form.Check
            id="formHorizontalRadios1"
            name="pre_existing_diseases"
            inline
            type="radio"
            label="Si"
            value={"Si"}
            className="ml-3"
          />

          <Form.Check
            id="formHorizontalRadios2"
            name="pre_existing_diseases"
            inline
            type="radio"
            label="No"
            value={"No"}
          />
          <label className="text-danger">
            {errors.pre_existing_diseases?.message}
          </label>
        </Form.Group>
        <Form.Group>
          <Form.Control
            size="sm"
            className="mt-3"
            ref={register}
            onChange={handler}
            value={values.diseases_detail || ""}
            name="diseases_detail"
            type="text"
            placeholder="Detalle enfermedades"
          />
          <label className="text-danger">
            {errors.diseases_detail?.message}
          </label>
        </Form.Group>

        <Form.Group
          controlId="formBasicAllergies"
          ref={register}
          onChange={handler}
          value={values.allergies || ""}
        >
          <Form.Label>Alergias? </Form.Label>
          <Form.Check
            name="allergies"
            className="ml-3"
            inline
            type="radio"
            label="Si"
            value={"Si"}
            id="formHorizontalRadios3"
          />
          <Form.Check
            name="allergies"
            inline
            type="radio"
            label="No"
            value={"No"}
            id="formHorizontalRadios4"
          />
          <label className="text-danger">{errors.allergies?.message}</label>
        </Form.Group>
        <Form.Group controlId="formBasicAllergiesDetail">
          <Form.Control
            size="sm"
            className="mt-3"
            ref={register}
            onChange={handler}
            value={values.allergies_detail || ""}
            name="allergies_detail"
            type="text"
            placeholder="Detalle alergias"
          />
          <label className="text-danger">
            {errors.allergies_detail?.message}
          </label>
        </Form.Group>
        <h6 className="mb-3 text-primary">Contacto de emergencia:</h6>
        <Row>
          <Col>
            <Form.Group controlId="formBasicNameLastName">
              <Form.Label>Nombre y Apellido: </Form.Label>
              <Form.Control
                size="sm"
                ref={register}
                onChange={handler}
                value={values.emergency_contact_complete_name || ""}
                name="emergency_contact_complete_name"
                type="name"
                placeholder="Nombre y apellido"
              />
              <label className="text-danger">
                {errors.emergency_contact_complete_name?.message}
              </label>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formBasicLastPhone">
              <Form.Label>Teléfono: </Form.Label>
              <Form.Control
                size="sm"
                ref={register}
                onChange={handler}
                value={values.emergency_contact_number || ""}
                name="emergency_contact_number"
                type="name"
                placeholder="Casa o movil"
              />
              <label className="text-danger">
                {errors.emergency_contact_number?.message}
              </label>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="submit"
              onClick={handleSubmit(registro)}
              className="btn btn-primary"
              variant="primary"
            >
              Siguiente
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MedicalInfo;
