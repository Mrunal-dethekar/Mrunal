import React from "react";

// function Hello(props){
// return(
//   <>
//   <h1>Hello {props.heading} and {props.heading2}</h1>
//   </>
// );
// }

// Destructring
// function Hello({heading,heading2 = 'Mrunal'}){  // assigning value if we didnt given
//   return(
//     <>
//     <h1>Hello {heading} and {heading2}</h1>
//     </>
//   );
//   }

function Hello({heading,heading2}){ 
  return(
    <>
    {/* <h1>Hello {heading}{heading2 ? ' and ' + heading2 : ''}</h1> */}
    <h1>Hello {heading}{heading2 && ` and  + ${heading2} `}</h1>  {/* conditional rendering */}
    </>
  );
  }
  
export default Hello