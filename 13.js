/* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente. */
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      console.log('La posicion del array es: ' + i)
      return i
    }
  }
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  array.splice(index, 1)
  console.log(array)
}

console.log(mainCharacters)
removeItem(mainCharacters, 'Luke')
removeItem(mainCharacters, 'Leia')
removeItem(mainCharacters, 'Rey')
removeItem(mainCharacters, 'Anakin')
