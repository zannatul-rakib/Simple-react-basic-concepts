import React from 'react';

const Hello = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Developer: {props.developer}</p>
        </div>
    );
};

export default Hello;