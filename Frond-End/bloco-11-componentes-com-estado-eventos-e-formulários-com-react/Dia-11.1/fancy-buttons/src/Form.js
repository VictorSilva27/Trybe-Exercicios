import React, { Component } from 'react'
// import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      Tué: false,
      papaguaioFamoso: '',
      radio: false,
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
        <div>
            <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
                <textarea 
                name="estadoFavorito" 
                value={this.state.estadoFavorito} 
                onChange={this.handleChange} />
            </label>
        </div>
        
        <div>
            <label>
                Quantos anos a Rainha tem?
                <input
                    type="number"
                    name="idade"
                    value={this.state.idade} 
                    onChange={ this.handleChange }
                    />
            </label>
        </div>
        
        <div>
            <label>
                Tu é?
                <input
                type="checkbox"
                name="Tué"
                value={this.state.Tué} 
                onChange={ this.handleChange }
                />
            </label>
        </div>

        <div>
            <label>
                Qual papaguaio é mais famoso?
                <select
                name="papaguaioFamoso"
                value={this.state.papaguaioFamoso} 
                onChange={ this.handleChange }
                >
                    <option value="Vagalume"> Vagalume </option>
                    <option value="Borboleta"> Borboleta </option>
                    <option value="Lagarta"> Lagarta </option>
                    <option value="Tubarão"> Tubarão </option>
                </select>
            </label>
        </div>
      </form>
    </div>
    );
  }
}

export default Form;