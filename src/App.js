import React, { Component } from 'react';
import {TodoList} from './TodoList';
import {Header} from './Header';
import {Content} from './Content';
import {Footer} from './Footer';

class App extends Component {
  
  constructor(){
    super();
    this.state = { tasks : [
      "Kitap Oku",
      "Randevu Al"
      ]};
      this.addTask = this.addTask.bind(this);
  }
  
  addTask(val){
    let updateList = this.state.tasks;
    updateList.push(val);
    this.setState({ tasks: updateList });
  }

  render() {

    return (
      
      <div>
        <Header addTask= { this.addTask }></Header>
        <Content tasks = { this.state.tasks }></Content>
        <Footer></Footer>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
