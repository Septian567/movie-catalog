import { itActsAsFavoriteMovieModel } from './contracts/favoriteMovieContract';

let favoriteMovies = [];

const FavoriteMovieArray = {
  getMovie(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, eqeqeq
    return favoriteMovies.find((movie) => movie.id == id);
  },

  getAllMovies() {
    return favoriteMovies;
  },

  putMovie(movie) {
    // eslint-disable-next-line no-prototype-builtins
    if (!movie.hasOwnProperty('id')) {
      return;
    }

    favoriteMovies.push(movie);
  },

  deleteMovie(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id

    // eslint-disable-next-line eqeqeq
    favoriteMovies = favoriteMovies.filter((movie) => movie.id != id);
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteMovies = [];
  });

  itActsAsFavoriteMovieModel(FavoriteMovieArray);
});
