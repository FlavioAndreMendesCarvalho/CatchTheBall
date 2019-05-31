import React, { Component } from 'react';
import posed from "react-pose";

const Objeto = posed.div({
  a: {
    x: (props) => props.x,
    y: (props) => props.y,
    transition: (props) => ({ duration: props.moveDuration })
  },
  b: {
    x: (props) => props.x,
    y: (props) => props.y,
    transition: (props) => ({ duration: props.moveDuration })
  }
});


class MoveBall extends Component {
  state = {
    toggle: true,
    x: (Math.floor(Math.random() * (window.innerWidth - 60))),
    y: (Math.floor(Math.random() * window.innerHeight - 60)),
    caught: false
  };

  interval;

  componentDidMount() {
    const { level } = this.props;
    this.interval = setInterval(this.cambiarPosiciones, level.changeInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  cambiarPosiciones = () => {
    const { level } = this.props;
    this.setState({
      toggle: !this.state.toggle,
      x: (Math.floor(Math.random() * (window.innerWidth - level.size))),
      y: (Math.floor(Math.random() * window.innerHeight - level.size))
    });
  };

  intentoDeEsquivar = () => {
    const { level } = this.props;
    const number = Math.random() * 100;
    number < level.dodgeProbability && this.cambiarPosiciones();
  };

  atrapado = () => {
    const { succes } = this.props;
    this.setState({ caught: true });
    succes();
  };


  render() {

    const { x, y, toggle, caught } = this.state;
    const { level } = this.props;

    const style = {
      width: (level.size + "px"),
      height: (level.size + "px"),
      backgroundColor: level.color,
      cursor: "pointer",
      zIndex: 1
    };

    if (caught) {
      return null;
    }

    return (
      <Objeto
        x={x}
        y={y}
        moveDuration={level.moveDuration}
        onMouseDown={this.atrapado}
        onMouseEnter={this.intentoDeEsquivar}
        pose={toggle ? 'a' : 'b'}
        className="position-absolute rounded-circle shadow-lg"
        style={style}>
      </Objeto>
    );
  }
}

export default MoveBall;
