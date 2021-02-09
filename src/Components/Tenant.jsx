import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tenant = ({
  id,
  name,
  last_name,
  vehicle_registration_number,
  email,
  dni,
  phone,
  to,
}) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{last_name}</td>
        <td>{dni}</td>
        <td>{phone}</td>
        <td>{vehicle_registration_number}</td>
        <td>{email}</td>
        <td className=" d-flex p-1 justify-content-center">
          <Link to={to}>
            <Button
              className="font-weight-bold"
              size="sm"
              variant="outline-success"
            >
              Ver mas
            </Button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Tenant;
