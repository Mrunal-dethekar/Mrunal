import React from "react";

function Tabs({ tabNames }) {
  return (
    <div className="tabs">
      {
        tabNames.map( tab =>{
          <div className="tab">
             <a href="#">{tab}</a>
          </div>
        })
      }
    </div>
    // <div className="tabs">
    //   <div className="tab">
    //     <a href="#">Home</a>
    //   </div>
    //   <div className="tab">
    //     <a href="#">About</a>
    //   </div>
    //   <div className="tab">
    //     <a href="#">features</a>
    //   </div>
    // </div>
  );
}

export default Tabs;
