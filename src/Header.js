import React from 'react';

export class Header extends React.Component {

    render(){

        return(
            <div>
                <h3 className="center">TODO List</h3>
                <div className="header">
                    <input type="text" className="todo-add-input" placeholder="What needs to be done?" />
                    <button className="add-button">+</button>
                </div>
            </div>
        );
    }
}