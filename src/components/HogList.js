import React from 'react';
import Hog from './Hog';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {this.props.hogs.map((hog) => (
          <Hog hog={hog} key={hog.name} />
        ))}
      </div>
    );
  }
}

export default HelloWorld;
