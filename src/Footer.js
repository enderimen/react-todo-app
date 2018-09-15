import React from 'react';

export class Footer extends React.Component {

    render(){

        return(
            <div className="footer">
                <div className="sum">0 items</div>
                <div className="all"><button className="all-btn">All</button></div>
                <div className="active"><button className="all-btn">Active</button></div>
                <div className="completed"><button className="completed-btn">Completed</button></div>
            </div>
        );
    }
}