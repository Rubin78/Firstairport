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

/* <parent to child data transfer=========================>
 */
/* 
import React, { Component } from 'react'
import Home from "../src/Home";
export default class App extends Component {
 */

/*   render() {
 */

/*     const data = "there should be som data";

    return (
      <div>

        <Home data={data} />
      </div>
    )
  }
}
 */

/* using hooks how to change or update the values =====================================> */

/* rmber when we are using functional component we dont have to use this .state in button section */

/* 
import React,{useState} from 'react';

const App = () => {


  const [name, setName] = useState("changing data");



  const hancleClick=()=>{

    setName(" yes you have change the data");
  }
  return (
    <div>
    <h1>  {name} </h1>



      <button onClick ={hancleClick}> hello </button>
    </div>
  );
};

export default App; */

/* 




import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   axios
     .put("https://jsonplaceholder.typicode.com/posts/1", {
       id: 1,
       title: "foo",
       body: "rubin",
       userId: 1,
     },
     
     
     )


     
     axios.put("https://jsonplaceholder.typicode.com/posts/2", {
       id: 2,
       title: "solo",
       body: "dodod",
       userId: 2,
     },
     )
     .then((response) => {
       setData(response.data);
     })

     .catch((error) => {
       console.log(error);
     });


      console.log(data)
  });

  return (
    <div>
    
    </div>
  );
};

export default App;  */

/* event in react  ============>
 */

/* remember if ur using the event in functional component then u have to use (function)  eg function shoot(){

}
 */

/* import React, { useState } from 'react';

const App = () => {

  const [name, setName] = useState("shaun");

function shoot() {
alert("hello");
setName("rubin");
}
  return (
    <div>
      <h1>{name}</h1>
      <button onClick = {shoot}  > shoot a shot </button>
    </div>
  );
};

export default App;11 */

/* rember if ur using class component then u can make this by simply using this.
 */
/* import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "Snop Technology",
      profile: "developer ",
    };
  }

  changeWords=()=> {
    alert("this is good to go");

    this.setState({
      company: "Snoopeer Technology",
      profile: "developer as a junior",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.company}</h1>
        <h1>{this.state.profile}</h1>
        <button onClick={this.changeWords}>helo change </button>
      </div>
    );
  }
}
 */

/* ==========paasing arugument ============ */
/* 


 remember its is simple and revese of alert first it will show the dialog box of alert ad then the dom elemnt  */
/* 

import React, { Component } from 'react'

export default class App extends Component {

  shoot=(e)=> {


    alert(e);
  }
  
  render() {
    return (
      <div>

        <button onclick={this.shoot('goal')}> goal</button>
        
      </div>
    )
  }
}
 */

/* 
import React, { Component } from 'react'

export default class App extends Component {


  constructor(props){

    super(props);

    this.state = {
      username: " ",
    };


  }



myChange=(event)=>{

  this.setState({username:event.target.value})
}



  render() {


    return (
      <div>
        <form>
          <h1> hello {this.state.username}</h1>

          <div>
            <input type=" text" placeholder="welcome" onChange={this.myChange} />
          </div>
        </form>
      </div>
    );
  }
}
 */

/* only for input not submit */
/* 
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
    };
  }

  submitHandler=(event)=>{
event.preventDefault();
alert("you are submiting " + this.state.username)  

  }
  myChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h1>hello {this.state.username}</h1>

          <div>
            <input type="text" onChange={this.myChange} />

            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
} */

/* import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      username: " ",
    };
  }

  submitHandler=(event)=>{

event.preventDefault();
alert("you are submmitung the data " + this.state.username); 
  }

  myChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h1>hello {this.state.username}</h1>

          <input type="text" onChange={this.myChange} />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

 */

/* 
import React, { Component } from 'react'
import Home from "../src/Home";
export default class App extends Component {


  render() {
 

   const data = "there should be som datass";

    return (
      <div>

        <Home data={data} />


      
      </div>
    )
  }
}
 */

/* 
import React,{useState} from 'react';

import axios from "axios";



const App = () => {

const [task, settask] = useState("");
const [password, setpassword] = useState("");


const submitHandler = (e) => {
    e.preventDefault();

  axios
    .post(
      "https://addschedule-74df8-default-rtdb.firebaseio.com/.json",{
        task,
        password

      }
      
    )
    .then((res) => {

          setTimeout(function () {
          
          }, 5000);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};




  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <div>
          <input
            style={{ padding: 6 }}
            required
            label="Your name"
            id="name"
            type="text"
            value={task}
            onChange={(e) => {
              settask(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            style={{ padding: 6 }}
            required
            label="Your name"
            id="name"
            type="text"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div>
      
            <input type="submit" value="Sign up" />
          
        </div>
      </form>
    </div>
  );
};

export default App; */
/* 
import React, { useState } from "react";
import Axios from "axios";

const App = () => {
  const [name, setname] = useState("");

  const [passwrd, setpasswrd] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("https://makingapi-3467d-default-rtdb.firebaseio.com/.json", {
      name,
      passwrd,
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label style={{ padding: 6 }}>name</label>

        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            style={{ padding: 6 }}
          />
        </div>
        <label style={{ padding: 6 }}>password</label>

        <div>
          <input
            type="password"
            value={passwrd}
            onChange={(e) => {
              setpasswrd(e.target.value);
            }}
            style={{ padding: 6 }}
          />
        </div>
        <div style={{ padding: 6 }}>
          <input type="submit" style={{ padding: 6 }} />
        </div>
      </form>
    </div>
  );
};

export default App;
 */

/* import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setname] = useState("");

  const [passwrd, setpasswrd] = useState(" ");

  const submitHandler = (s) => {
    s.preventDefault();
    axios
      .post("https://makingapi-3467d-default-rtdb.firebaseio.com/.json", {
        name,
        passwrd,
      })
      .then((response) => {
        console.log(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={(s) => {
          submitHandler(s);
        }}
      >
        <div>
          <input
            type="text"
            value={name}
            onChange={(s) => {
              setname(s.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="password"
            value={passwrd}
            onChange={(s) => {
              setpasswrd(s.target.value);
            }}
          />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default App;
 */




import React,{useEffect,useState} from 'react';
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
              <div>


<table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
                <table>
                  <tr>
                    <th>{item.name}</th>
                    <th>{item.name}</th>
                    <th>{item.name}</th>
                  </tr>
                </table>
              </div>
            ))}
          </>
        ))}
    </div>
  );
};

export default App; 


/* 
import React,{useState,useEffect} from 'react';
import DataTable from "./DataTable";
const App = () => {
const [data, setData] = useState("");

const [name, setName] = useState("");

  return (


    <div>


      <div> 
<DataTable />
        </div>
    </div>
  );
};

export default App; */