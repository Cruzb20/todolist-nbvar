import React, { useState } from "react";
import './App.css';
import Navbar from './compo/Navbar';
import Form from "./compo/Form";

function App() {

  const [showForm, setShowForm] = useState(true);
  return (
    <>
 <Navbar/>
    <div className='Ss'>
      HELLO WORLD
    </div>
    <br /> <br />
   <center>
    <button onClick={() => setShowForm
        (!showForm)}>Toggle</button></center><br/>
        {showForm  &&
<Form />
        }
    </>
  )
}

export default App
