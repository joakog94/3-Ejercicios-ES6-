/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */

/* 5.6 Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
 */
//! 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const adultAges = ages.filter((age) => age > 18)

console.log('Ejercicio 1')
console.log(adultAges)
console.log('-----------------------')

//! 5.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const evenAges = ages2.filter((age) => age % 2 === 0)

console.log('Ejercicio 2')
console.log(evenAges)
console.log('-----------------------')

//! 5.3
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const leagueStreamers = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)

console.log('Ejercicio 3')
console.log(leagueStreamers)
console.log('-----------------------')

//! 5.4
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const nameStreamers = streamers2.filter((streamer) =>
  streamer.name.includes('u')
)

console.log('Ejercicio 4')
console.log(nameStreamers)
console.log('-----------------------')

//! 5.5

const legendStreamers = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes('Legends')
)

for (let i = 0; i < legendStreamers.length; i++) {
  if (legendStreamers[i].age > 35) {
    legendStreamers[i].gameMorePlayed =
      legendStreamers[i].gameMorePlayed.toUpperCase()
  }
}

console.log('Ejercicio 5')
console.log(legendStreamers)
console.log('-----------------------')

//! 5.6

const inputText = document.querySelector(
  'input[data-function="toFilterStreamers"]'
)

inputText.addEventListener('input', function (e) {
  const searchText = e.target.value
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.includes(searchText)
  )
  console.log('Ejercicio 6')
  console.log(filteredStreamers)
})
