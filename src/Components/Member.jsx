import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Member = ({ id, name, last_name, dni, age, to, readonly }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{last_name}</td>
      <td>{dni}</td>
      <td>{age}</td>
      {!readonly ? (
        <td>
          <Link to={to}>
            <Button
              className="font-weight-bold"
              size="sm"
              variant="outline-success"
            >
              EDITAR
            </Button>
          </Link>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};

export default Member;
