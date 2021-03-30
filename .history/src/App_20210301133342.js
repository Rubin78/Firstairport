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








import React, { Component } from 'react'

export default class App extends Component {
constructor(props){

  super(props);

  this.state ={

    brand : "volvo"
  };

}






Changecolor =()=>{


  this.setState({brand: "mercedes"});
}


  render() {


    return (
      <div>
        

<div>{this.state.brand}</div>

<button onClick={this.Changecolor} > button</button>

      </div>
    )
  }
}
