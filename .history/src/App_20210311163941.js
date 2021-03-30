// import React, { Component } from 'react';
// import { wait } from "@testing-library/react";

// class App extends Component {

// state={

//   loading:true,
//   person:false,
// }

// async componentDidMount(){

// const url = "https://api.randomuser.me/"
// const response = await fetch(url);
// const data = await response.json();
// this.setState({person:data.results[0],loading:false})

// }

//   render() {

//  if(this.state.loading){
// return<div>loading ....</div>

//  }

//  if(!this.state.person){
//   return<div>loadingnothing ....</div>

//    }
//     return (
//       <div>

//     <div>{this.state.person.title}</div>

//     <div>{this.state.person.name.first}</div>
//     <div>{this.state.person.name.last}</div>
//     <div>{this.state.person.gender}</div>
//     <div>{this.state.person.timezone}</div>

//   <img src= {this.state.person.picture.large} />
//         </div>
//     );
//   }
// }

// export default App;

// import { wait } from "@testing-library/react";
// import React from "react";

// export default class FetchRandomUser extends React.Component {

//   // async componentDidMount() {
//   //   const url = "https://api.randomuser.me/";
//   //   const response = await fetch(url);
//   //   const data = await response.json();
//   //   this.setState({ person: data.results[0], loading: false });
//   // }

//   state={
//     loading:true,
//     person:null,
//   }

//  async componentDidMount() {

//   const url = "https://api.randomuser.me/";
//   const response = await fetch(url);
//   const data = await response.json();
//   this.setState({person:data.results[0],loading:false})

//  }

//   render() {
//     // if (this.state.loading) {
//     //   return <div>loading...</div>;
//     // }

//     // if (!this.state.person) {
//     //   return <div>didn't get a person</div>;
//     // }

// if (this.state.loading) {
// return <div>loading ...</div>
// }

// if (!this.state.person) {
//   return <div>didnt get anything</div>
// }

//     return (

// <div>

// <div>{this.state.person.name.title}</div>
// <div>{this.state.person.name.first}</div>
// <div>{this.state.person.name.last}</div>
// <div>{this.state.person.gender}</div>
// <div>{this.state.person.address}</div>

// <img src={this.state.person.picture.large} />

// </div>
//     );
//   }
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// export default function APISession() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setData(response.data);
//       })

//       // .catch((error) => {
//       //   console.log(error);
//       // });
//   }, []);

//   console.log(data);

//   return (
//     <div>
//       {data &&
//         data.map((item) => (
//           <div key={item.id}>
//             {item.name} - {item.phone}
//           </div>
//         ))}
//       {/* {data[0] && <div>{JSON.stringify(data)}</div>} */}
//     </div>
//   );
// }
/* 
import React, {useState,useEffect} from 'react';
import axios from "axios";

const App = () => {

  const [data ,setData] = useState([]);
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setData(response.data);

    })
  })
  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            {item.name} - {item.phone}
          </div>
        ))}
      {/* {data[0] && <div>{JSON.stringify(data)}</div>} */
/*  </div>
  );
};

export default App; */

/* 
import React, { Component } from 'react'


export default class App extends Component {
   
  constructor(props) {
    super(props);

    this.state = {
      brand: "ford",
      company: "Snoop Technology",
    };
  }

  changeBrand = () => { 
  alert("Great Shot!");

    this.setState({brand: "love "});
        this.setState({ company: "Snooper " });
        

  }

  render() {
const greeting = "welcome to amafh";
    return (
      <div>
        <div>{this.state.brand} </div>
        <div>{this.state.company} </div>
        <h2>I am a {greeting}</h2>
        

        <button onClick={this.changeBrand}>hello change</button>
      </div>
    );
  }
}


 */

/*  import React , {useState} from 'react';
 
 const App = () => {

   const [count, setCount] = useState(0);


   return (
     <div>
<p> this is my {count}</p>

<button onClick={() =>setCount(count+2)}> clickme </button></div>
   );
 };
 
 export default App;
 */

/* import React, { useState, useEffect } from "react";
import axios from "axios";
export default function APISession() {
  const [data, setData] = useState([]);



useEffect(()=>{

  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) => { 

    setData(response.data)
  })

.catch((error)=>{

  console.log(error);
})

})

  return (
    <div>


{data &&
data.map((item)=>(

  <div key={item.id}>

    {item.name}
  </div>
))}

    </div>
  );

        }  




 */

/*  get data ====================================================== >
 */

/* 

import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {data &&
        data.map((item) => (
          <div key={item.id}>

            {item.name} -{item.phone} -{item.city}


          </div>
        ))}
    </div>
  );
};

export default App; */

/*   <======================================================================using state and changing the data value==========================================>*/

/* 
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "Snoop Technology",
      profile: "developer",
    };
  }

  changeData=()=>{

    this.setState({
      company: "Snoopeer Technology",
      profile: "developer as a junior",
    });
  }


  render() {
    return (
      <div>
        <h1> Currently m working in {this.state.company}</h1>
        <h1>My profile is {this.state.profile}</h1>

        <button onClick={this.changeData}> hello </button>
      </div>
    );
  }
}
 */

import React, { Component } from "react";
import Home from "../src/Home";
export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
