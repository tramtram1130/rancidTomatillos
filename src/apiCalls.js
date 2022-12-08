const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

const getSelectedMovie = (id) => {
  const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + id
  return fetch(url)
    .then(response => response.json())
}

export { getAllMovies, getSelectedMovie }