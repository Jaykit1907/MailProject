import React,{useState} from "react";
import "./App.css";

const App1=()=>{

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  const handlesubmit=(e)=>{

    const formdata={
      name:name,
      email:email,
      password:password
    };
    
    fetch("http://localhost:4000/insert",{
      method:"POST",
      headers:{
      "Content-Type":"application/json"},
      body:JSON.stringify(formdata)
    })
      .then(() => console.log("Backend API connected successfully..."))
      .catch((err) => console.log(err));
  }
  return(<>
            <form onSubmit={handlesubmit}>
              <input type="text" placeholder="name" onChange={(e)=>{setName(e.target.value)}}></input>
              <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
              <input type="password" placeholder="password"  onChange={(e)=>{setPassword(e.target.value)}}></input>
              <button type="submit">click</button>
            </form>

    </>);
}

export default App1;