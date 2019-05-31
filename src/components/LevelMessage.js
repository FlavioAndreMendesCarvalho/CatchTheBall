import React, { Component } from 'react';

class LevelMessage extends Component {
  render() {
    const { level, tiempo } = this.props;
    return (
        <div className="row flex-column position-absolute h-100 w-100 justify-content-center align-items-center">
          <h1 style={{ fontSize: "60px", userSelect: "none" }}>ATRAPAME SI PUEDES</h1>
          <h2 style={{ fontSize: "40px", userSelect: "none" }}>{level > 0 ? level : "MISIÓN: ATRAPAR EL PUNTO"}</h2>
          {level > 0 && <h2 style={{ fontSize: "20px", userSelect: "none" }}>{tiempo} s</h2>}
        </div>
    );
  }
}

export default LevelMessage;
