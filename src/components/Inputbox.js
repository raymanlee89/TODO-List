import React from 'react';

function Inputbox({inputValue, inputChange, inputSubmit}){
    return (
        <input 
            className="todo-app__input" 
            onKeyPress={inputSubmit}
            onChange={inputChange}
            value={inputValue}
            placeholder="What needs to be done?"
        />
    );
}

export default Inputbox;