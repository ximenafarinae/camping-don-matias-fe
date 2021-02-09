import React from "react";
import Member from "./Member";
import { useGet } from "./../utils/useHTTP";
import { Table } from "react-bootstrap";
import Loading from "./Spinner";

const Members = ({ id, readonly, members }) => {
  const [data, isLoading, errors] = useGet({
    url: `familyMember/${id}`,
  });
  return (
    <>
      <Table striped bordered hover size="sm" className="mr-4">
        <thead>
          <tr>
            <th className="text-success">ID</th>
            <th className="text-success">NOMBRE</th>
            <th className="text-success">APELLIDO</th>
            <th className="text-success">DNI</th>
            <th className="text-success">EDAD</th>
            {!readonly ? <th className="text-success">MÁS</th> : ""}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <Loading></Loading>
            </tr>
          ) : members ? (
            members.map((member) => (
              <Member
                to={`/edit-family-member/${member.id}`}
                readonly={readonly}
                key={member.dni}
                {...member}
              ></Member>
            ))
          ) : (
            data.map((member) => (
              <Member
                to={`/edit-family-member/${member.id}`}
                readonly={readonly}
                key={member.id}
                {...member}
              />
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Members;
