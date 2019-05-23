import React, { Component } from 'react';
import award from './../award.svg'

class VictoryMessage extends Component {
  render() {
    const { reiniciarNormal, reiniciarDificil } = this.props;
    return (
      <div className="row flex-column position-absolute h-100 w-100 justify-content-center align-items-center">
        <h1 style={{ fontSize: "60px", userSelect: "none" }}>¡¡ WOOW !!</h1>
        <h1 style={{ fontSize: "60px", userSelect: "none" }}>HAS GANADO</h1>
        <img className="my-5" style={{ filter: "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))" }} width="300px"
             height="300px" src={award} alt=""/>
        <h5 style={{ fontSize: "20px", userSelect: "none" }}>reiniciar</h5>
        <div className="d-flex">
          <h5 className="mr-2 text-success" style={{ fontSize: "20px", userSelect: "none", cursor: "pointer" }}
              onClick={reiniciarNormal}>normal</h5>
          <h5 className="ml-2 text-danger" style={{ fontSize: "20px", userSelect: "none", cursor: "pointer" }}
              onClick={reiniciarDificil}>extremo</h5>
        </div>
      </div>
    );
  }
}

export default VictoryMessage;
