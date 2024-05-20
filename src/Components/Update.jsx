import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate= useNavigate();

    useEffect(()=>{
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"))
      setEmail(localStorage.getItem("email"))
    },[])

    const handleUpdate = (e) =>{
      e.preventDefault();
      axios.put(`https://664af189a300e8795d43864b.mockapi.io/crud-op/${id}`,{
        name : name,
        email : email,
      }).then(()=>{
        navigate('/read')
      })
    }

  return (
    <>
     <div className="d-flex justify-content-between m-2">
        <h2>Update</h2>
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
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" 
            className="form-control" 
            autoComplete='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mx-2" 
          onClick={handleUpdate}
          >Update
          </button>
          <Link to="/read">
             <button className='btn btn-secondary mx-2'>Back</button>
          </Link>
       </form>
  </>
  )
}

export default Update
