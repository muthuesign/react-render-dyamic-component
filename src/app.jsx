import React, { Component } from 'react';
import Content from './content.jsx';
import InsertText from './shared/insert-text.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      component: {
        tag: InsertText,
        value: 'From Parent'
      }
    };
  }
  render() {
    return (
      <div>
        <main className="m-5 p-2">
          <Content component={this.state.component}></Content>
        </main>
      </div>
    );
  }
}

export default App;
