import React from 'react';

export class Header extends React.Component {

    addTask(e) {
        e.preventDefault();
        const todo = document.getElementById("todo-add");
        const todoAdd = todo.value; 
        console.log("Çalıştı" + todoAdd);
        todo.value = '';
        this.props.addTask(todoAdd);
    }

    render(){
    
        return(
            <div>
                <h3 className="center">TODO List</h3>
                <div className="header">
                    <form onSubmit={ this.addTask }>
                        <input type="text" id="todo-add" className="todo-add-input" placeholder="What needs to be done?" />
                        <button className="add-button" onClick={ this.addTask.bind(this) }>+</button>
                    </form>
                </div>
            </div>
        );
    }
}