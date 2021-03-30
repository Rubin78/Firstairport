


import React, { useState,component, useEffect } from 'react';
import axios from "axios"
const App = () => {

  const [data ,setData] = useState([]);
useEffect(() => {


    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
setData(response.data)

    })

    .catch((error)=>{

      console.log(error)
    })

})
  return (
    <div>
      
    </div>
  );
};

export default App;