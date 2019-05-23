import React, { Component } from 'react';

class LevelMessage extends Component {
  render() {
    const { level } = this.props;
    return (
        <div className="row flex-column position-absolute h-100 w-100 justify-content-center align-items-center">
          <h1 style={{ fontSize: "60px", userSelect: "none" }}>ATRAPAME SI PUEDES</h1>
          <h2 style={{ fontSize: "40px", userSelect: "none" }}>Nivel {level}</h2>
        </div>
    );
  }
}

export default LevelMessage;
