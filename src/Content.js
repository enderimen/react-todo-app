import React from 'react';

export class Content extends React.Component {

    render(){

        const items = this.props.tasks.map((element, i) => {
            return(
                <li key={ i }>
                    { i +1 } { element }
                    <button className="isCompleted"></button>
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