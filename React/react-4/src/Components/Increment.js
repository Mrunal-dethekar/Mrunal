import React from "react";
import { Button } from 'react-bootstrap' 

function Increment({count, setCount}){
  return(
    <Button variant="dark" onClick={() => setCount(count + 1)}>
    Increment
  </Button>
  )
}

export default Increment;