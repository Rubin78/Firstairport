



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
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, Col ,Row} from "mdbreact";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App";

const App = () => {
  const [data, setData] = useState([]);

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
      <Row>
        <div className="col headertext">Name</div>
        <div className="col">ICAO</div>
        <div className="col">IATA</div>
        <div className="col">Elev.</div>
        <div className="col">Lat.</div>
        <div className="col">Long.</div>
        <div className="col">Type</div>
      </Row>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <Row>
              <div className="col">{item.name}</div>
              <div className="col">{item.name}</div>

              <div className="col">{item.name}</div>
              <div className="col">{item.name}</div>

              <div className="col">{item.name}</div>
              <div className="col">{item.name}</div>
              <div className="col">{item.name}</div>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default App; 