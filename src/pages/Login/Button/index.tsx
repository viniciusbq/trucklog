import React from 'react';

interface IBotao {
  handleMostrarCadastro: () => void;
}

const Botao = ({ handleMostrarCadastro }: IBotao) => {
  return (
    <>
      <button onClick={handleMostrarCadastro}>
        Ainda não possui uma conta?
      </button>
    </>
  );
};

export default Botao;
