const baseURL = 'https://api.tvmaze.com/shows';
const main = document.querySelector('.main-page');

/* ******** Retrieve data(movies) from the base URL ************* */

const get = async () => {
  const a = await fetch(baseURL);
  const movie = await a.json();
  return movie;
};
get(baseURL);

const involve = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getId = async () => {
  const response = await fetch(involve, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const Id = await response.text();
  return Id;
};
getId(involve);

const likesUrl = `${involve}OWXxsNAMHfs9CUxnHwK3/likes`;

const sendLike = async (itemID) => {
  const response = await fetch(likesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemID }),
  });
  const likeSent = response.text();
  return likeSent;
};

const getLike = async () => {
  const response = await fetch(likesUrl);
  const likes = await response.json();
  return likes;
};

/* ************** Generate Items Dynamical ***************** */

const generateUIElement = async (data) => {
  for (let i = 0; i < data.length; i += 1) {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-conatiner');
    const Img = document.createElement('img');
    Img.setAttribute('src', `${data[i].image.medium}`);
    Img.setAttribute('alt', `affiche of ${data[i].name}`);
    const details = document.createElement('div');
    details.classList.add('details');
    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = `${data[i].name}`;
    const stats = document.createElement('span');
    stats.classList.add('stats');
    const icone = document.createElement('i');
    icone.setAttribute('class', 'fa fa-heart-o');
    icone.setAttribute('aria-hidden', 'true');
    const likeCount = document.createElement('span');
    likeCount.classList.add('likecount');
    likeCount.setAttribute('Id', `${data[i].id}`);
    likeCount.textContent = '0 likes';
    stats.append(icone, likeCount);
    details.append(title, stats);
    const movieBtn = document.createElement('div');
    movieBtn.classList.add('movieBtn');
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('commentBtn');
    commentBtn.setAttribute('movie-Id', `${data[i].id}`);
    commentBtn.textContent = 'Comments';
    const line = document.createElement('br');
    const Reservationbtn = document.createElement('button');
    Reservationbtn.classList.add('Reservationbtn');
    Reservationbtn.textContent = 'Reservation';
    movieBtn.append(commentBtn, line, Reservationbtn);
    movieContainer.append(Img, details, movieBtn);
    main.append(movieContainer);
  }
};

export default generateUIElement;
export { get, sendLike, getLike };