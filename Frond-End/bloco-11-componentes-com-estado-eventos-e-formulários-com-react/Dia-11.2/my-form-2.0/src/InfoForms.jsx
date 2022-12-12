import React, { Component } from 'react';

class InfoForms extends Component {
  render() {
    const {
      currentState: {
        name, email, cpf, address, city, states,
        type, summary, position, jobDescription
      }
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { address }</div>
        <div> Cidade: { city }</div>
        <div> Estado: { states }</div>
        <div> Tipo de residência: { type }</div>
        <h3>Profissional</h3>
        <div> Currículo: { summary }</div>
        <div> Cargo: { position }</div>
        <div> Descrição do cargo: { jobDescription }</div>
      </div>
    );
  }
}

export default InfoForms;