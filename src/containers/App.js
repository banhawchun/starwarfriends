import React, { Component } from 'react';
import '../containers/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      starwar: [],
      searchBar: ''
    }
  }

    render(){
      return(
        <div>
          <h1>Star War Peeps</h1>
        </div>
      );
    }
}

export default App;
