import React from 'react';

const oldWithClass = (props) => (
    <div className= {props.classes}>
        {props.children}
     </div>   
);

export default oldWithClass;