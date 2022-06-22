import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    this.setState(({ numeroDeCliques }) => ({
      numeroDeCliques: numeroDeCliques + 1
    }))
  }

  handleClick2() {
    this.setState((estadoAnterio) => ({
      numeroDeCliques2: estadoAnterio.numeroDeCliques2 + 1
    }))
  }

  handleClick3() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques3: estadoAnterio.numeroDeCliques3 + 1
    }))
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numeroDeCliques, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques) }}>
          Botão 1 | Count =  {this.state.numeroDeCliques}
        </button>
        <button
          onClick={this.handleClick2}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques2) }}>
          Botão 2 | Count =  {this.state.numeroDeCliques2}
        </button>
        <button
          onClick={this.handleClick3}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques3) }}>
          Botão 3 | Count =  {this.state.numeroDeCliques3}
        </button>
      </>
    )
  }
}

export default App;