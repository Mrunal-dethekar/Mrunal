import React from 'react'
import Childcomponent from './childcomponent/childcomponent';


function Component1(){
  return (
    <div>
      <h1 style={{backgroundColor: 'black', color: 'white'}}>Heading1</h1>
      <p>
        lorem500
      </p>
      <Childcomponent/>
    </div>
  )
}

export default Component1;