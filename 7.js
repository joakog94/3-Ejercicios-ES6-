/* 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */

//! 7.1

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]

const suma = exams.reduce((accumulator, exam) => (accumulator += exam.score), 0)

console.log('Ejercicio 1')
console.log(suma)
console.log('------------------------')
//! 7.2

const aprovedExams = exams.filter((exam) => exam.score > 5)
const aprovedSum = aprovedExams.reduce(
  (accumulator, exam) => (accumulator += exam.score),
  0
)

console.log('Ejercicio 2')
console.log(aprovedExams)
console.log(aprovedSum)
console.log('--------------------------------')

//! 7.3

const averageSum =
  exams.reduce((accumulator, exam) => (accumulator += exam.score), 0) /
  exams.length

console.log('Ejercicio 3')
console.log(averageSum)
