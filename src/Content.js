import React from 'react';

export class Content extends React.Component {

    constructor() {
        super();     
        this.state = {todoFilter: 'All'};
    }

    todoListFilter = (param) => {
        this.setState({todoFilter:param});
        const activeBtn = document.getElementById('filterBtn' + param);

        document.getElementById('filterBtnAll').classList.remove('active');
        document.getElementById('filterBtnActive').classList.remove('active');
        document.getElementById('filterBtnCompleted').classList.remove('active');

        activeBtn.classList.add('active');
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

                if(
                    this.state.todoFilter ==='All' || 
                    (this.state.todoFilter === 'Active' && element.status === 'passive') ||
                    (this.state.todoFilter === 'Completed' && element.status === 'Completed')
                ){
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
                }
                
        });
         
        return(
            <div>
                <div className="content">
                    <ul type="none">
                        { items }
                    </ul>
                </div>

                <div className="footer">
                    <div className="sum">0 items</div>
                    <li className="all active" id="filterBtnAll" onClick={() => this.todoListFilter('All')}><span>All</span></li>
                    <li className="actives" id="filterBtnActive" onClick={() => this.todoListFilter('Active')}><span>Active</span></li>
                    <li className="completed" id="filterBtnCompleted" onClick={() => this.todoListFilter('Completed')}><span>Completed</span></li>
                </div>
            </div>
        );
    }
}