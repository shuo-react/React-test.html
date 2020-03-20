import React from 'react';

const controller = (props) => {
    console.log(props);
    return (
        <form>
            <input value={props.newTask} 
                onChange={props.handleNewTask}/>
            <button onClick={props.addNewTask}>
                Add
            </button>
        </form>
    );
};

export default controller;