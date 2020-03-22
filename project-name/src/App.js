import React from 'react';

import Controller from './controller';
import MyList from './list';

// es5 function syntax
class App extends React.Component {
  state = {
    newTask: '',
    taskArray: [
      {
        content: 'Take the trash out ',
        id: 1,
        isDone: true
      },
      {
        content: 'Wash dishes ',
        id: 2,
        isDone: true
      },
      {
        content: 'Sweep and mop ',
        id: 1,
        isDone: false
      }
    ]
  }

  addNewTask = (event) => {
    event.preventDefault();

    let taskArray = this.state.taskArray;
    taskArray.push({
      content: this.state.newTask,
      id: taskArray.length +1,
      isDone:false
    });

    this.setState({
      taskArray: taskArray,
      newTask: ''
    })
  }

  setNewTask = (newTask) => {
    this.setState({
      newTask: newTask.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {/* Use uppercase */}
        <Controller
          handleNewTask={this.setNewTask}
          addNewTask={this.addNewTask}
          newTask={this.state.newTask} />
        <MyList taskArray={this.state.taskArray} />
      </div>
    );
  }
}

export default App;
