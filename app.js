document.addEventListener("DOMContentLoaded", function () {
  const moviesList = document.querySelector("#list");
  const removedList = document.querySelector("#removed");

  const added = getDiff(movies, previous);
  const removed = getDiff(all, movies);

  movies.forEach(movie => {
    let isNew = added.indexOf(movie) !== -1 && allRemoved.indexOf(movie) === -1;
    let reAdded = allRemoved.indexOf(movie) !== -1;

    moviesList.innerHTML += `<li ${isNew ? 'class="new"' : ''}${reAdded ? 'class="added"' : ''}><span>${movie}${isNew ? ' <small>new</small>' : ''}${reAdded ? ' <small>readded</small>' : ''}</span></li>`
  })

  removed.forEach(movie => {
    removedList.innerHTML += `<li>${movie}</li>`
  })
});

const getDiff = (source, target) => {
  return source.filter(movie => target.indexOf(movie) === -1)
}