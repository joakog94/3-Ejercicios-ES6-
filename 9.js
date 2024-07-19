/* Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.

Para filtrar las categorías puedes ayudarte de la función .includes(). */

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

const categories = []

for (const movie of movies) {
  for (let i = 0; i < movie.categories.length; i++) {
    if (!categories.includes(movie.categories[i])) {
      categories.push(movie.categories[i])
    }
  }
}

console.log(categories)
