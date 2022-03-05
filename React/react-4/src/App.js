import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./Components/TableComponent";
import { Container, Button, ProgressBar } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(true);
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      <Container>
        <Button varient="dark" onClick={()=> setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
       {show && <TableComponent/>}
       <h1>{count}</h1>
       <ProgressBar now={count} />
      <Button variant="dark" className="m-3" onClick={()=>setCount(count + 1)}>Increment</Button>
      <Button variant="dark" className="m-3" onClick={()=>setCount(count - 1)}>Decrement</Button>
      </Container>
    </div>
  );
}


export default App;
