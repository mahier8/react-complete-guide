import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/People/Person/Person';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "fwfwffw", name: 'Max', age: 28 },
      { id: "ggge", name: 'Manu', age: 29 },
      { id: "hjj6", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // dont mutate the original array that is why we 
    // create a new copy of the array stored in a const
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    
    this.setState({
      persons: persons
    });
  }

  deletePersonhandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // the above represents the older way and the 
    // below the more modern way 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
    //Same as (this.state.showPersons === true)
      persons = <People 
        //I changed people to persons to match 
        //the local
          people={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangedHandler} />;
    }

    return (

      <div className={classes.App}>
      <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
      />         
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
