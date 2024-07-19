import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  title: string;
  overview: string;
  imageUrl: string;
  // Add other fields as needed
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: boolean;
}

interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
      localStorage.setItem('Movies', state.movies.toString());
    },
    // Add other reducers as needed
  },
});

// Export actions
export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
