import React from 'react';
import classes from './Cockpit.css' 
import Aux from '../../hoc/Aux';


const cockpit = (props) => {
    const assignedClassNames= [];
    let buttonClass= classes.Button;

    if(Object.keys(props.persons).length <= 2){
        assignedClassNames.push( classes.red );
    }
    if(Object.keys(props.persons).length <= 1){
        assignedClassNames.push(classes.bold );
    }
    
    if(props.showPersons){
        buttonClass = [classes.Button, classes.Red].join(' ');
    }

    return (  
        <Aux>      
            <h1>{props.appTitle}</h1>,
            <p className ={assignedClassNames.join(' ')} > Hey its working</p>,
            <button className = {buttonClass}
                    onClick={props.clicked}>Toggle Names</button>
        </Aux>        
        );

}

export default cockpit;