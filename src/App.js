import React, { Component } from 'react';
import {TodoList} from './TodoList';
import {Header} from './Header';
import {Content} from './Content';

class App extends Component {
  
  constructor(){
    super();
    this.state = { tasks : [
      {text: "Kitap Oku", status: "passive"},
      {text: "Randevu Al", status: "passive"}
      ]};
      this.addTask    = this.addTask.bind(this);
      this.doneTask   = this.doneTask.bind(this);
      this.removeTask = this.removeTask.bind(this);
  }
  
  addTask(val){
    let updateList = this.state.tasks;
    updateList.push({text: val, status:"passive"});
    this.setState({ tasks: updateList });
  }

  doneTask(task_id){
    task_id = task_id.replace("task_","");

    let updateList = this.state.tasks;

    let newStatus = "Completed";

    let currentStatus = updateList[task_id].status;

    if(currentStatus === "Completed"){
      newStatus = "passive";
    }

    console.log(task_id);
    
    updateList[task_id].status = newStatus;
    this.setState({ tasks: updateList });
  }

  removeTask(task_id){
    task_id = task_id.replace("task_","");

    let updateList = this.state.tasks;
    
    updateList.splice(task_id, 1);

    this.setState({ tasks: updateList });

  }

  render() {
    
    return (
      
      <div>
        <Header addTask= { this.addTask }></Header>
        <Content tasks = { this.state.tasks } doneTask = { this.doneTask } removeTask = { this.removeTask }></Content>
        <TodoList />
      </div>
    );
  }
}

export default App;
