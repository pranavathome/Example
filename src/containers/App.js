import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


class App extends PureComponent {
  constructor(props){
    super(props);
    console.log(' [App.js] inside constructor' ,  props);
    this.state = {
      persons :[
        { id : "2323",  name: "max", age: 28},
        { id : "2324",  name: "manu", age: 32},
        { id : "2325",  name: "macy", age: 26}
      ],
      address: "123 Main street",
      showPersons: false,
      toggleClicked : 0
    }  
  }

  componentWillMount() {
    console.log(' [App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

/*
  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
    return nextState.persons != this.state.persons ||
            nextState.showPersons != this.state.showPersons;    
  }
 */ 

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate()');
  }


  /*
  state = {
    persons :[
      { id : "2323",  name: "max", age: 28},
      { id : "2324",  name: "manu", age: 32},
      { id : "2325",  name: "macy", age: 26}
    ],
    address: "123 Main street",
    showPersons: false
  }*/

  nameChangeHandler = (event, id) => {
    console.log("in the name change handler: " +  id );
    const personIndex =  this.state.persons.findIndex(p => {
          if(p !== undefined) {
            return p.id === id;
          }
      });
   
      const person = { 
          ...this.state.persons[personIndex]
      }
      // const person = Object.assign({}, this.state.persons[personIndex]);
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({persons: persons});
 }

 togglePersonHandler = () => {
   this.setState((prevState, props) => {
      return {
        showPersons : ! this.state.showPersons,
        toggleClicked : prevState.toggleClicked + 1
      }
    });
 }


 deletePersonHandler = (personIndex) => {
   //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
   // persons.slice(personIndex, 1);
   delete persons[personIndex];
   console.log(persons);
   this.setState({persons: persons});

 }

  render() {
    console.log('[App.js] inside  render()');
    let persons = null;
    if(this.state.showPersons){
      persons =   <Persons  persons= {this.state.persons} 
                      clicked = {this.deletePersonHandler}
                      changed = {this.nameChangeHandler}/> ;
      }


    return (
        <Aux>
          <button onClick = {() => {this.setState({showPersons: true})} }> Show Persons </button>
          <Cockpit  showPersons = {this.state.showPersons}
                    persons = {this.state.persons}
                    clicked = {this.togglePersonHandler}
                    appTitle = {this.props.title} />
          {persons}
        </Aux>
      
      //React.createElement("div", {className:'App'}, 
         //React.createElement("h1",null, "its working"))
    );
    
  }
}

export default withClass(App, classes.App);
