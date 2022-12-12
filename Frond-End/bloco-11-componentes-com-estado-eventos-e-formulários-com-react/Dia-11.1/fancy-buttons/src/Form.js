import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito'
import Idade from './Idade';
import PapaguaioFavorito from './PapaguioFamoso';
import Tué from './Tué?';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      Tué: false,
      papaguaioFamoso: '',
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
    <div>
      <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
      <form className="form">
        <EstadoFavorito
            value={this.state.estadoFavorito} 
            handleChange={this.handleChange}
        />
        
        <Idade 
            value={this.state.idade}
            handleChange={this.handleChange}
        />
        
        <Tué 
            value={this.state.Tué}
            handleChange={this.handleChange}
        />

        <PapaguaioFavorito 
            value={this.state.papaguaioFamoso}
            handleChange={this.handleChange}
        />
        
      </form>
    </div>
    );
  }
}

export default Form;