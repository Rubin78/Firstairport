import { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  Col,
  image,
  Row,
} from "mdbreact";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React from 'react';
function DataTable({data}) {
    const columns = data[0] && Object.keys(data[0]);

    return (
      <table cellPadding={0} cellSpacing={0}>
        {/* {data &&
          data.map((item) => (
            <div key={item.id}>
              <Col className="parentties">
                <Row>
                  <div className="col ">{item.name}</div>
                </Row>
              </Col>
            </div>
          ))} */}
        <thead>
          <tr>
            {data[0] &&
              rows.map((item) => <th className="thead">{item.name}</th>)}
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <div key={item.id}>
              <tr>
                {rows.map((row) => (
                  <td>
                    {item.name} -{item.city}
                  </td>
                ))}
              </tr>
            </div>
          ))}
        </tbody>
      </table>
    );
}

export default DataTable;