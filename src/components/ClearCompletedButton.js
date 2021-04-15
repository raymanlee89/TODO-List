import React from 'react';

function ClearCompletedButton({undone_count, clearCompleted}){
    if(undone_count === 0){
        return (
            null
        );
    }else{
        return (
            <div className="todo-app__clean">
                <button onClick={clearCompleted}>Clear completed</button>
            </div>
        );
    }
}

export default ClearCompletedButton;