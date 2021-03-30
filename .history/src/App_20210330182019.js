

/* 
 {columns && columns.map((column)=>
                    <Checkbox
                    checked={searchColumns.includes(column)}
                    onChange={(e)=>{
                      const checked =searchColumns.includes(column);
                      setSearchColumns((prev) =>
                      checked ? prev.filter((sc) => sc !== column) : [...prev ,column]
                      )
                    }} */




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
const [searchColumns, setSearchColumns] = useState([
  "name",
  "city",
  "longitude",

  "altitude	",

  "country",

  "dst",

  "elevation",
  "iata",
  "icao",
  "timezone",
  "type",
  "id",
]);


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
  console.log(rows)
  return rows.filter((row) =>
    searchColumns.some(
      (column) =>
        row &&
        row[column] &&
        row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
    )
  );
}
       const columns = data[0] && Object.keys(data[0]);

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