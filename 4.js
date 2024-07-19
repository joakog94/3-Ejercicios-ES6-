/* 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
]; */

//! 4.1
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const names = users.map((user) => user.name)

console.log('Ejercicio 1')
console.log(names)
console.log('-----------------')

//! 4.2

const names2 = users.map((user) => user.name)

for (let i = 0; i < names2.length; i++) {
  if (names2[i][0] === 'A') {
    names2[i] = 'Anacleto'
  }
}

console.log('Ejercicio 2')
console.log(names2)
console.log('----------------------')

//! 4.3

const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const nameCities = cities.map((city) => city.name)

for (let i = 0; i < nameCities.length; i++) {
  if (cities[i].isVisited == true) {
    nameCities[i] = nameCities[i] + '(Visitado)'
  }
}

console.log('Ejercicio 3')
console.log(nameCities)
console.log('----------------------')
