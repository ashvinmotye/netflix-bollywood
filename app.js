document.addEventListener("DOMContentLoaded", function () {
  const moviesList = document.querySelector("#list");
  const removedList = document.querySelector("#removed");

  const added = getDiff(movies, previous);
  const removed = getDiff(previous, movies);

  movies.forEach(movie => {
    moviesList.innerHTML += `<li>${movie}${added.indexOf(movie) !== -1 ? ' <small><i>(new)</i></small>' : ''}</li>`
  })

  removed.forEach(movie => {
    removedList.innerHTML += `<li>${movie}</li>`
  })
});

const getDiff = (source, target) => {
  return source.filter(movie => target.indexOf(movie) === -1)
}