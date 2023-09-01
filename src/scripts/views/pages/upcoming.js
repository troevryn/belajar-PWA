import TheMovieDbSource from '../../data/themoviewdb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Upcoming in Cinema</h2>
    <div id="movies" class="movies">
    </div>
  </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
