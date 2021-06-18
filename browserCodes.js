// Search by "Hindi Language Movies"
var movies = [];
document.querySelectorAll(".ptrack-content .slider-refocus").forEach(el => {
  // console.log(el.getAttribute("aria-label"))
  movies.push(el.getAttribute("aria-label"))
})

console.log(movies.length);
copy(movies)

// REMOVED
var allRemovedBrowser = [];
document.querySelectorAll("#removed li").forEach(li => allRemovedBrowser.push(li.innerText));

copy(allRemovedBrowser);
