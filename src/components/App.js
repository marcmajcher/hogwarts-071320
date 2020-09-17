import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogList from './HogList';

class App extends Component {
  state = {
    showGreased: false,
    sortBy: 'none',
  };

  setShowGreased = (showGreased) => {
    this.setState({ showGreased });
  };

  setSortBy = (sortBy) => {
    this.setState({ sortBy });
  };

  sorts = {
    none: (a, b) => 0,
    name: (a, b) => a.name.localeCompare(b.name),
    weight: (a, b) => a.weight - b.weight,
    namerev: (a, b) => b.name.localeCompare(a.name),
    weightrev: (a, b) => b.weight - a.weight,
  };

  render() {
    return (
      <div className="App">
        <Nav setShowGreased={this.setShowGreased} setSortBy={this.setSortBy} />
        <HogList
          hogs={
            (this.state.showGreased ? hogs : hogs.filter((hog) => !hog.greased))
            .sort(this.sorts[this.state.sortBy])
          }
        />
      </div>
    );
  }
}

export default App;
