import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person, index) => {
        const { id, name, age, image } = person;
        return (
          <div ket={index} className="person">
            <img src={image} alt={image} />
            <div className="name">
              <h4>{name}
                </h4>
                <p>{age} Age</p>
                </div>
          </div>
        );
      })}
    </>
  );
}

export default List;
