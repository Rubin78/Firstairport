



/* import React,{useEffect,useState} from 'react';
import axios from "axios";
import DataTable from "./DataTable";

const App = () => {

   const [task, setTask] = useState({});
   const [taskListingData, setTaskListingData] = useState({});
   
   useEffect(() => {
     axios
       .get("https://datatable-1274e-default-rtdb.firebaseio.com/.json")
       .then((res) => {
         setTaskListingData(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);

   const handleTask = () => {
     setTask("ok");
   };
  return (
    <div>
      {taskListingData &&
        Object.entries(taskListingData).map((task) => (
          <>
            {task.map((item) => (
              <div key={item[0]}>
                <table>
                  <tbody>
                    <tr>
                      <th>{item.name}</th>
                      <th>{item.name}</th>
                      <th>{item.name}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </>
        ))}
    </div>
  );
};

export default App;  */




import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  Col,
  Row,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdbreact";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";


import Checkbox from "@material-ui/core/Checkbox";
const App = () => {
  const [data, setData] = useState([]);
const [searchTerm, setsearchTerm] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);   
      })

      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <div>
        <Row className="banner">
          <div className="col-10 bannerinside">
            <div>
              <h1>
                First <span>airports</span>
              </h1>
            </div>
          </div>

          <div className="col-2">s</div>
        </Row>
      </div>
      <div>
        <Row className="checkboxmain">
          <div className="col-7 bannercheckbox">
            {/* style={{ backgroundColor: "red" }} */}
            <div className="typetext">TYPE</div>
            <Row>
              <Col>
                <Checkbox
                  className="changecolr"
                  inputProps={{
                    "aria-label": "uncontrolled-checkbox",
                    background: "black",
                  }}
                />
                <label>Small</label>
                <Checkbox
                  className="changecolr"
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <label>Medium</label>

                <Checkbox
                  className="changecolr"
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <label>Large</label>

                <Checkbox
                  className="changecolr"
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <label>Heliport</label>
                <Checkbox
                  className="changecolr"
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <label>Closed</label>

                <Checkbox
                  className="changecolr"
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <label>In your favourite</label>
              </Col>
            </Row>
          </div>
          <div className="col-5">
            {/*             style={{ backgroundColor: "green" }}
             */}{" "}
            <Col>
              <h5>Filter by Search</h5>
            </Col>
            <Col>
              <input
                placeholder="Sar"
                onChange={(event) => {
                  setsearchTerm(event.target.value);
                }}
              />
            </Col>
          </div>
        </Row>
      </div>

      <Row className="tablerbanner">
        <div className="col theader">Name</div>
        <div className="col theader">ICAO</div>
        <div className="col theader">IATA</div>
        <div className="col theader">Elev.</div>
        <div className="col theader">Lat.</div>
        <div className="col theader">Long.</div>
        <div className="col theader">Type</div>
      </Row>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </MDBTableHead>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <MDBTableBody>
                  {" "}
                  <tr>
                    <td>{item.name}</td> <td>{item.name}</td>
                    <td>{item.name}</td>
                  </tr>
                 
              </MDBTableBody>

              {/* <Col className="parentties">
              <Row>
                <div className="col ">{item.name}</div>
                <div className="col ">{item.name}</div>

                <div className="col">{item.name}</div>
                <div className="col">{item.name}</div>

                <div className="col">{item.name}</div>
                <div className="col">{item.name}</div>
                <div className="col">{item.name}</div>
              </Row>
            </Col> */}
            </div>
          ))}
      </MDBTable>
    </div>
  );
};

export default App; 


