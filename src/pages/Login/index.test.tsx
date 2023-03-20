import React from 'react';
import { mount } from 'enzyme';
import Logar from '.';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('Testando o componente Logar', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<Logar />);
  });

  test('Deve ter um formulário com três inputs', () => {
    expect(wrapper.find('input')).toHaveLength(3);
  });

  test('Deve ter uma função handleSubmit que valida o login', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        email: { value: 'invalido@teste.com' },
        password: { value: '123456' },
      },
    });
    const spy = jest.spyOn(window, 'alert');
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        email: { value: 'invalido@teste.com' },
        password: { value: '123456' },
      },
    });

    expect(spy).toHaveBeenCalledWith('Digite um E-mail!');

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        email: { value: 'valido@teste.com' },
        password: { value: '123456' },
      },
    });
    expect(window.location.href).toEqual('http://localhost/');
  });
});
