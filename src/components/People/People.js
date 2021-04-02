import React from "react";
import Person from "./Person/Person";

// should the below be named persons or people
const people = (props) => props.people.map((person, index) => {
        return <Person 
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => props.changed(event, person.id)}
        />
      })
;

export default people;