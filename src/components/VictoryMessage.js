import React, { Component } from 'react';
import award from './../award.svg'

class VictoryMessage extends Component {

  state = {
    name: "",
    rang: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ rang: true }), 30000)
  }

  ponerNombre = (event) => {
    this.setState({ name: event.target.value })
  };

  submit = () => {
    const { tiempo } = this.props;
    localStorage.setItem(this.state.name, tiempo);
    this.setState({ rang: true });
  };

  render() {
    const { reiniciarNormal, reiniciarDificil, tiempo } = this.props;
    const { rang } = this.state;
    if (rang) {
      const ranking = localStorage;
      const arrayNames = Object.keys(ranking);

      const trueRanking = arrayNames.map((name) => ({ name: name, points: ranking.getItem(name) }))
      .sort((a, b) => a.points - b.points )
      .filter((item) => item.name !== "")
      .filter((x, i) => i < 10);


      return <div className="row flex-column position-absolute h-100 w-100 justify-content-center align-items-center">
        <h1 className="text-light" style={{ fontSize: "60px", userSelect: "none" }}>Ranking</h1>
        {trueRanking.map((key, index) =>
          <div key={index} className="d-flex text-light">
            {key.name + ": " + key.points}</div>
        )}

        <h5 className="mt-4" style={{ fontSize: "20px", userSelect: "none" }}>reiniciar</h5>
        <div className="d-flex">
          <h5 className="mr-2 text-success" style={{ fontSize: "20px", userSelect: "none", cursor: "pointer" }}
              onClick={reiniciarNormal}>normal</h5>
          <h5 className="ml-2 text-danger" style={{ fontSize: "20px", userSelect: "none", cursor: "pointer" }}
              onClick={reiniciarDificil}>extremo</h5>
        </div>
      </div>
    }
    return (
      <div className="row flex-column position-absolute h-100 w-100 justify-content-center align-items-center">
        <h1 style={{ fontSize: "60px", userSelect: "none" }}>¡¡ WOOW !!</h1>
        <h1 style={{ fontSize: "60px", userSelect: "none" }}>HAS GANADO</h1>
        <h2 style={{ fontSize: "20px", userSelect: "none", color: "#d4af37" }}>{tiempo} s</h2>
        <img className="my-5" style={{ filter: "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))" }} width="250px"
             height="250px" src={award} alt=""/>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label className="text-light" htmlFor="name"> Nombre:</label>
            <input autoComplete="off" className="form-control" name="name" type="text" onChange={this.ponerNombre} value={this.state.name}/>
          </div>
        </form>
      </div>
    );
  }
}

export default VictoryMessage;
