"use strict";

var arr = [1, 3, 4, 5, 6]; // Retira o "function", os parênteses, as chaves, o return e o ponto e virgula.

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: 'Caio'
  };
};

console.log(teste());
