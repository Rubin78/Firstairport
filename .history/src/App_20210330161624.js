



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




/* import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, Col ,image,Row} from "mdbreact";
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

          <div className="col-2">
            <img src={require("./assests/iconss.png")} />
          </div>
        </Row>
      </div>
      <div>
        <Row className="checkboxmain">
          <div className="col-7 bannercheckbox">
          
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
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <Col className="parentties">
              <Row>
                <div className="col ">{item.name}</div>
                <div className="col ">{item.name}</div>

                <div className="col">{item.name}</div>
                <div className="col">{item.name}</div>

                <div className="col">{item.name}</div>
                <div className="col">{item.name}</div>
                <div className="col">{item.name}</div>
              </Row>
            </Col>
          </div>
        ))}
    </div>
  );
};

export default App; 


 */








import React,{useState,useEffect} from 'react';
import axios from "axios";
import DataTable from './DataTable';
import ReactPipeline from "react-pipeline";


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
import "./App.css";

import Checkbox from "@material-ui/core/Checkbox";


require("es6-promise").polyfill();
require("isomorphic-fetch");
 function App(props) {
const [data, setData] = useState([])
const [q, setQ] = useState("");
const [searchColumns, setsearchColumns] = useState("");


    useEffect(() => {
      axios
        .get("https://datatable-1274e-default-rtdb.firebaseio.com/.json")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        }, [])

        .catch((error) => {
          console.log(error);
        });

    },[]
    
    
    );

/*          row.name.toLowerCase().indexOf(q) > -1 

    columns.some((column) => row[column].String.toString().toLowerCase().indexOf(q.toLowerCase) > - 1)

 */ 
function search(rows) {
  const columns = rows[0] && Object.keys(rows[0])
  console.log(rows)
  return rows.filter((row) => row.name.toLowerCase().indexOf(q) > -1 ||
   row.city.toLowerCase().indexOf(q) > -1  
  
  );
}
     
  return (
    <div className="container-fluid">
      <div style={{ padding: 20, background: "#f4f4f4" }}>
        <div className="bd">
          <div>
            <Row className="banner">
              <div className="col-10 bannerinside">
                <div>
                  <h1>
                    Filter <span>airports</span>
                  </h1>
                </div>
              </div>

              <div className="col-2">
                <img src={require("./assests/iconss.png")} />
              </div>
            </Row>
          </div>
          <div>
            <Row className="checkboxmain" style={{ background: "white" }}>
              <div
                className="col-6 bannercheckbox"
                style={{ background: "white", padding: 40 }}
              >
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
              <div className="col-6">
                <Col>
                  <h5>Filter by Search</h5>
                </Col>
                <Col>
                  <input
                    type="text"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </Col>
              </div>

              <div className="tablemain">
                          <DataTable data={search(data)} />
                
              </div>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;