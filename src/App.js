import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: "Mahier", age: 34},
      {name: "Angel", age: 28},
      {name: "Bobby", age: 29}
    ], 
  });

  const [ otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("was clicked");
    // Dont do this: this.state.persons[0].name = "Mahier Sydow";
    setPersonsState({    
      persons: [
      {name: "Mahier Sydow", age: 34},
      {name: "Angel", age: 28},
      {name: "Bobby", age: 30}
    ],
  });
  };
  
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>My hobbies: playing striker</Person>
        <Person 
        name={personsState.persons[2].name} a
        ge={personsState.persons[2].age} />personsState
      </div>
    );
    {/* // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now')); */}
};

export default app;