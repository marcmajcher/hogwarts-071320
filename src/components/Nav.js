import piggy from '../porco.png';
import React from 'react';

export default function Nav(props) {
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
          onClick={(e) => props.setShowGreased(e.target.checked)}
        />
      </div>

      <div>
        Sort by:
        <select onChange={(e) => props.setSortBy(e.target.value)}>
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
