// App.test.js
import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ValidEmail from './ValidEmail';

describe('Testando elementos', () => {

  test('Verificando se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  test('Verificando se existe um botão', () => {
    render(<App />);
    const btn = screen.getAllByRole('button');
    expect(btn).toHaveLength(2)
  });

  test('Verificando se existe um botão de enviar', () => {
    render(<App />);
    const btn = screen.getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveProperty('type', 'button');
    expect(btn).toHaveValue('Enviar');
  });
});

describe('Testando funções', () => {
  test('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<App />);

    const EMAIL_USER = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user');

    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
    expect(inputEmail).toHaveValue('');
  });
});

describe('Component ValidEmail', () => {
  test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
});