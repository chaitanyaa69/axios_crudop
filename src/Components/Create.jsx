import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const navigate = useNavigate();
  //const header ={"Access-Control-Allow-Origin" : "*"}

  const handleSubmit = (e) =>{
    e.preventDefault();
    //console.log("Clicked")
    axios.post(
      'https://664af189a300e8795d43864b.mockapi.io/crud-op',
      {
        name :name,
        email :email
      }).then(()=>{
        navigate('/read')
      })
    
  }

  return (
  <>
     <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
            type="text" 
            className="form-control" 
            onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" 
            className="form-control" 
            aria-describedby="emailHelp" 
            autoComplete='email'
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
       </form>
  </>
  );
}

export default Create
