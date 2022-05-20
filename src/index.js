import './style.css';
import './modules/movieCounter.js';
import generateUIElement, { get, sendLike, getLike } from './modules/home.js';

const likeUpdate = async () => {
  const likes = await getLike();
  const likeCount = document.querySelectorAll('.likecount');
  likeCount.forEach((el) => {
    for (let i = 0; i < likes.length; i += 1) {
      if (Number(el.id) === likes[i].item_id) {
        el.textContent = `${likes[i].likes} likes`;
      }
    }
  });
};
const displayItem = async () => {
  const movies = await get();
  generateUIElement(movies);

  const likebtn = document.querySelectorAll('i');
  likebtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const element = e.target.nextElementSibling;
      const targetId = element.id;
      movies.forEach((movie) => {
        if (parseInt(targetId, 10) === movie.id) {
          sendLike(movie.id);
          getLike().then((result) => {
            result.filter((item) => {
              if (item.item_id === movie.id) {
                element.textContent = `${item.likes} likes`;
              }
              return item;
            });
          });
        }
      });
    });
    likeUpdate();
  });
};
displayItem();
