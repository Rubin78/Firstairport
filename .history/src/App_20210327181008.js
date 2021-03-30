



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

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://datatable-1274e-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        setData(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            {item.name} -{item.phone} -{item.city}-{item.longitude}
          </div>
        ))}
    </div>
  );
};

export default App; 