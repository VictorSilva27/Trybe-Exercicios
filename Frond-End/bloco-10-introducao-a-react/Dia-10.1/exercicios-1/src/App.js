import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myCommitments = [
  'Tomar café da manhã',
  'Assistir aula do Course',
  'Fazer Exercícios do Course',
  'Almoçar',
  'Aula ao vivo',
  'Revisar Exercícios',
  'Ver aula do próximo dia do Course',
];

class App extends React.Component {
  render() {
    return <ul>{ myCommitments.map((callIndex) => Task(callIndex)) }</ul>
  }
}

export default App;