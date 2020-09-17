import React, { Component } from 'react';

export default class extends Component {
  state = {
    showDetails: false,
  };

  render() {
    const hog = this.props.hog;

    return (
      <div
        className="pigTile"
        onClick={() => this.setState({ showDetails: !this.state.showDetails })}
      >
        <div className="smallHeader">{hog.name}</div>
        <img
          src={`/img/${hog.name.toLowerCase().split(' ').join('_')}.jpg`}
          alt={hog.name}
        />

        {this.state.showDetails ? (
          <div>
            <ul>
              <li></li>
              <li>{hog.greased ? 'Greased!' : 'Not greased :('}</li>
              <li>Weight: {hog.weight}</li>
              <li>Specialty: {hog.specialty}</li>
              <li>Medal: {hog['highest medal achieved']}</li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
