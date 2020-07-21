const arr = [1, 3, 4, 5, 6];

// Retira o "function", os parênteses, as chaves, o return e o ponto e virgula.
const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: 'Caio' });

console.log(teste());