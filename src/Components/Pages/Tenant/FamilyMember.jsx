import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FamilyForm from "../../FamilyMemberForm";
import Members from "../../Members";

const FamilyMember = ({ match }) => {
  const id = match.params.id;
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const readonly = true;
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <FamilyForm
              match={match}
              id={id}
              readonly={readonly}
              setLoading={setLoading}
              setMembers={setMembers}
            ></FamilyForm>
          </Col>
          <Col sm={6} className="mt-5">
            <Members members={members} id={id} readonly={readonly}></Members>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FamilyMember;
