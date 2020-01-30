import React, { Component } from 'react';
import '../containers/App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
  constructor(){
    super();
    this.state = {
      starwars: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({ starwars: users }));
  }

  onSearchChange = (event) =>{
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { starwars, searchField } = this.state;
    const filteredStarwar = starwars.filter(starwar => {
      return starwar.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (!starwars.length) ?
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Star War Peeps</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList starwars={filteredStarwar}/>
          </Scroll>
        </div>
      );
  }
}

export default App;
