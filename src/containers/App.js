import React, { Component } from 'react';
import '../containers/App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/people/';

    fetch(url)
    .then(response => response.json())
    .then(users => this.setState({ data: users.results }))
  }
  
  onSearchChange = (event) =>{
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { data, searchField } = this.state;
    const filteredStarwar = data.filter(starwar => {
      return starwar.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return ( 
      <div className='tc'>
        <h1 className='f1'>Star War Peeps</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList data={filteredStarwar}/>
        </Scroll>
      </div>

    );
  }
}

export default App;
