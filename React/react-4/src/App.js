import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./Components/TableComponent";
import { Container, Button, ProgressBar } from "react-bootstrap";
import Increment from './Components/Increment'
import FormComponent from "./Components/FormComponent";


function App() {
  // const [show, setShow] = useState(true);
  // let [count, setCount] = useState(0)

  //   // Replicating componentDidMount using useEffect hook
  //   useEffect(() => {
  //     console.log('Component Mounted!')
  //   }, [])
  
  //   // Replicating componentDidUpdate using useEffect hook
  //   useEffect(() => {
  //     console.log('Count or Show state was updated')
  //   }, [count, show])


  return (
    <div className="App">
      {/* <Container>
        <Button varient="dark" onClick={()=> setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
       {show && <TableComponent/>}
       <h1>{count}</h1>
       <ProgressBar now={count} />
       <Increment count={count} setCount={setCount}/>
      <Button variant="dark" className="m-3" onClick={()=>setCount(count - 1)}>Decrement</Button>
      </Container> */}
      <FormComponent />
    </div>
  );
}


export default App;
