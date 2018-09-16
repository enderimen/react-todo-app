import React from 'react';

export class Content extends React.Component {

    constructor(){
        super();
    }

    doneTask = (e) => {
        
        this.props.doneTask(e.target.parentNode.id);
        
    };

    removeTask = (e)=> {
    
        this.props.removeTask(e.target.parentNode.id);

    };

    render(){
            let items_sum = 0;
            const items = this.props.tasks.map((element, i) => {
                if(element.status === "passive" ){
                    items_sum++;
                }
                let task_id = 'task_'+ i;
                return(
                <li key={ i } id= { task_id }>
                    <span className="task" className={ element.status }>{ i + 1 } { element.text }</span>
                    <span className="isCompleted" onClick={ this.doneTask }></span>
                    <span className="remove" onClick={ this.removeTask }>X</span>
                </li>
            );
        });
         
        return(
            <div className="content">
                <ul type="none">
                    { items }
                </ul>
            </div>
        );
    }
}