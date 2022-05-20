import './style.css';
// import './modules/home.js';
import generateUIElement, { get, sendLike, getLike } from './modules/home.js';

window.addEventListener('load', async () => {
  const movies = await get();
  generateUIElement(movies);

  const likebtn = document.querySelectorAll('i');
  likebtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const element = e.target.nextElementSibling;
      const targetId = element.id;
      for (let i = 0; i < movies.length; i += 1) {
        if (movies[i].id === targetId) {
          sendLike(movies[i].id);
        }
      }
      // await sendLike();
      // getLike().then((res) => {
      //   element.textContent = `${res.likes} likes`;
      // });
    });
  });
});