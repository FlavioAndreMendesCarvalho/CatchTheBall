import React, { Component } from 'react';
import LevelMessage from './components/LevelMessage'
import VictoryMessage from './components/VictoryMessage'
import { normal, hard } from "./components/dificultades";


class App extends Component {

  state = {
    level: 0,
    style: hard
  };
  points = 0;


  succes = () => {
    const { style } = this.state;
    this.points = this.points + 1;
    if (this.points >= style[this.state.level].balls.length) {
      this.points = 0;
      this.setState({ level: this.state.level + 1 })
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
    const { level, style } = this.state;
    const isVictory = level > (style.length - 1);
    return (
      <div className="container-fluid vh-100 bg-dark overflow-hidden">
        {!isVictory ?
          <LevelMessage level={level}/>
          :
          <VictoryMessage reiniciarNormal={this.reiniciarNormal} reiniciarDificil={this.reiniciarDificil}/>}
        {!isVictory && style[level].balls.map((NewMoveBall, index) =>
          <NewMoveBall key={index} level={style[level]} succes={this.succes}/>
        )}
      </div>
    );
  }
}

export default App;
