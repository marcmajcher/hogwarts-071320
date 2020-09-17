import piggy from '../porco.png';
import React, { Component } from 'react';

export default class Nav extends Component {
  state = {
    showGreased: true,
    sortBy: 'none',
  };

  toggleGreased = () => {
    this.setState({ showGreased: !this.state.showGreased }, () =>
      this.props.setShowGreased(this.state.showGreased)
    );
  };

  setSortBy = (e) => {
    this.setState({ sortBy: e.target.value }, () =>
      this.props.setSortBy(this.state.sortBy)
    );
  };

  render() {
    return (
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>

        <div>
          Show Greased?{' '}
          <input
            type="checkbox"
            checked={this.state.showGreased}
            onClick={this.toggleGreased}
          />
        </div>

        <div>
          Sort by:
          <select onChange={this.setSortBy} value={this.state.sortBy}>
            <option value="none">None</option>
            <option value="name">Name</option>
            <option value="namerev">Name (Z-A)</option>
            <option value="weight">Weight</option>
            <option value="weightrev">Weight (reversed)</option>
          </select>
        </div>
      </div>
    );
  }
}
