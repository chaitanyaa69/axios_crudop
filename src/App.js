import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create/>}></Route>
          <Route path="/read" element={<Read/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
