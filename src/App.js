import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// Import styles
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({monsters: users});
            })
    }

    _onSearchChange(searchField) {
        this.setState({searchField: searchField});
    }

  render() {
      const {monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
          <div className="App">
              <h1>Monsters Rolodex By Shakhout</h1>
              <SearchBox onSearchChange={(searchField) => this._onSearchChange(searchField)} />
              <CardList monsters={filteredMonsters} />
          </div>
      );
  }
}

export default App;
