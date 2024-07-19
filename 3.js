/* 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2  pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; */

//! 3.1
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsList2 = [...pointsList]

console.log('Ejercicio 1')
console.log(pointsList)
console.log(pointsList2)
console.log('-------------------')

/* //! 3.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toy2 = { ...toy }

console.log('Ejercicio 2')
console.log(toy)
console.log(toy2)
console.log('-------------------') */

//! 3.3
const pointsLis = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]

const newList = [...pointsLis, ...pointsLis2]

console.log('Ejercicio 3')
console.log(newList)
console.log('-------------------')

//! 3.4
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const newObject = { ...toy, ...toyUpdate }

console.log('Ejercicio 4')
console.log(newObject)
console.log('-------------------')

//! 3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

const colors2 = [...colors]
colors2.splice(2, 1)

console.log('Ejercicio 5')
console.log(colors)
console.log(colors2)
