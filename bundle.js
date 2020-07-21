"use strict";

var usuario = {
  nome: 'Caio',
  idade: 21,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
