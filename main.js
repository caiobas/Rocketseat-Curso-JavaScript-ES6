const usuario = {
  nome: 'Caio',
  idade: 21,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP',
  },
};

function mostraNome({ nome, idade }){
  console.log(nome, idade);
}

mostraNome(usuario);