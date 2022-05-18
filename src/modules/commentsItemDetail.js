export const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EXmby9I6BhLpYqOc41Bj/comments';
export const commentPopUp = document.querySelector('.movie-popup');
export const movieApi = 'https://api.tvmaze.com/shows';
const fetchAllMovieComments = async (movieId) => {
  const response = await fetch(`${commentApi}?item_id=${movieId}`).catch((error) => error);
  return response.json();
};
const fetchTotalNumberOfComments = async (movieId) => {
  const response = await fetchAllMovieComments(movieId)
    .then((data) => (!data.error ? data.length : 0))
    .catch(() => 0);
  return response;
};

const updateTotalNumberOfComments = (movieId) => {
  fetchTotalNumberOfComments(movieId).then((totalNumOfComments) => {
    commentPopUp.querySelector('.total-num-of-comments').innerHTML = totalNumOfComments;
  });
};
const countNumOfComments = (response) => (typeof (response) === 'object' ? response.length : 'no match');
document.addEventListener('click', async (e) => {
  if (e.target.matches('.commentBtn')) {
    const response = await fetchAllMovieComments(e.target.id);
    const numberOfComments = countNumOfComments(response);
    document.querySelector('.total-num-of-comments').textContent = numberOfComments || 0;
  }
});

export default updateTotalNumberOfComments;
export { fetchAllMovieComments, countNumOfComments };