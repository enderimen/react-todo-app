import React, { Component } from 'react';
import {TodoList} from './TodoList';
import {Header} from './Header';
import {Content} from './Content';
import {Footer} from './Footer';

class App extends Component {
  render() {
    return (
      
      <div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
