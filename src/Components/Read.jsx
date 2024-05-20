import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
const Read = () => {

    const [data, setData] = useState([])
    const [tabledark, setTableDark] = useState("");

    function getData(){
      axios.get('https://664af189a300e8795d43864b.mockapi.io/crud-op')
      .then((res)=>{
        setData(res.data)
      })
    }

    function handleDelete(id){
      axios.delete(`https://664af189a300e8795d43864b.mockapi.io/crud-op/${id}`)
      .then(()=>{
        getData();
      })
    }

    const setLocalStorage=(id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    }

    useEffect(() => {
      getData();
    }, [])
    
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Users Data</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
          data.map((eachData)=>{
            return(
              <>
              <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>
                      <Link to='/update'>
                        <button 
                        className='btn-success'
                        onClick={()=>setLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email
                        )}
                        >Edit</button>
                      </Link>
                      
                    </td>
                    <td>
                      <button 
                      className='btn-danger'
                      onClick={()=>handleDelete(eachData.id)}
                      >Delete</button>
                    </td>
                  </tr>
               </tbody>
              </>
            )
          })
        }
      </table>
    </>
  )
}

export default Read
