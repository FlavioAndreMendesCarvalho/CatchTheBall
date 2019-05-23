import React, { Component } from 'react';

function asyncComponent(importComponent) {
  const hoc = class extends Component {
    state = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;

    }
  };

  hoc.displayName = (importComponent.displayName || importComponent.name);
  return hoc;
}

export { asyncComponent };
