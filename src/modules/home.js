const baseURL = 'https://api.tvmaze.com/shows';
const main = document.querySelector('.main-page');

const get = async (baseURL) => {
  const a = await fetch(baseURL);
  const movie = await a.json();
  for (let i = 0; i < movie.length; i += 1) {
    main.innerHTML += `<div class="movie-container">
                         <img src="${movie[i].image.medium}" alt="affiche of ${movie[i].name}"></img>
                         <div class="details">
                            <span class="title">${movie[i].name}</span>
                            <span class="stats">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                              <span class="likecount">5 likes</span>
                            <span>
                          </div>
                          <div class="movieBtn">
                            <button class="commentBtn">Comments</button><br>
                            <button class="Reservationbtn">Reservations</button>
                          <div>  
                       <div>`;
  }
};
get(baseURL);
