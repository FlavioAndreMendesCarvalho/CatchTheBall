import React, { Component } from 'react';
import LevelMessage from './components/LevelMessage'
import VictoryMessage from './components/VictoryMessage'
import { normal, hard } from "./components/dificultades";


class App extends Component {

  state = {
    level: 0,
    style: normal,
    tiempo: 0
  };

  points = 0;
  intervalo;


  upTime = () => {
    this.setState({ tiempo: this.state.tiempo + 1 })
  };


  succes = () => {
    const { style, level } = this.state;
    if (level === 0){
      this.setState({tiempo: 0});
      this.intervalo = setInterval(this.upTime, 1000)
    }
    this.points = this.points + 1;
    if (this.points >= style[this.state.level].balls.length) {
      this.points = 0;
      this.setState({ level: this.state.level + 1 });
      this.intentoDePararTiempo();
    }
  };

  intentoDePararTiempo = () => {
    const { style, level } = this.state;
    console.log(level);
    console.log(style.length);
    if(level >= (style.length - 1)){
      clearInterval(this.intervalo);
    }
  };

  reiniciarNormal = () => {
    this.points = 0;
    this.setState({ level: 0, style: normal })
  };

  reiniciarDificil = () => {
    this.points = 0;
    this.setState({ level: 0, style: hard })
  };


  render() {
    const { level, style, tiempo } = this.state;
    const isVictory = level > (style.length - 1);
    return (
      <div className="container-fluid vh-100 bg-dark overflow-hidden">
        {!isVictory ?
          <LevelMessage level={level} tiempo={tiempo}/>
          :
          <VictoryMessage reiniciarNormal={this.reiniciarNormal} reiniciarDificil={this.reiniciarDificil} tiempo={tiempo}/>}
        {!isVictory && style[level].balls.map((NewMoveBall, index) =>
          <NewMoveBall key={index} level={style[level]} succes={this.succes}/>
        )}
      </div>
    );
  }
}

export default App;
