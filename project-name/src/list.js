import React from 'react';

// instance of class
// this kewyword
class List extends React.Component {
    render() {
        let taskArray = this.props.taskArray;
        return (
            <ul>
                {taskArray.map(task => {
                    if (task.isDone) {
                        return (
                            <li key={task.id}>
                                <strike>
                                    {task.content}
                                </strike>
                            </li>
                        )
                    } else {
                        return (
                            <li key={task.id}>
                                {task.content}
                            </li>
                        )
                        
                    }
                }

                )}
            </ul>
        );
    }
}


export default List;

