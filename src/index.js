import './style.css';
// import './modules/home.js';
import generateUIElement, { get, sendLike, getLike } from './modules/home.js';

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
  });
  const likeCount = document.querySelectorAll('.likecount');
  likeCount.forEach((el) => {
    console.log(parseInt(el.id, 10));
    const likeUpdate = async () => {
      const likes = await getLike();
      if (parseInt(el.id, 10) === likes.item_id) {
        el.textContent = `${likes.likes} likes`;
      }
    };
    likeUpdate();
  });
};
displayItem();
