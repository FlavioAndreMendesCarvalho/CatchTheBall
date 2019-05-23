import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="container-fluid vh-100 bg-dark overflow-hidden">
        <div className="row position-absolute h-100 w-100 justify-content-center align-items-center">
          <h1 style={{ fontSize: "60px" }}>ATRAPAME SI PUEDES</h1>
        </div>
      </div>
    );
  }
}

export default Loading;
