document.addEventListener("DOMContentLoaded", function(){
  const target = document.querySelector("#list");

  movies.forEach(movie => {
    target.innerHTML += `<li>${movie}</li>`
  })
});