import { get } from './home.js';

const movieCounter = document.querySelector('.Moviecounter');
const counter = async () => {
  const elementToCount = await get();
  const number = elementToCount.length;
  movieCounter.textContent = `Movies To Watch(${number})`;
  return number;
};
counter();
