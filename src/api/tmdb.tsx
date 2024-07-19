import axios from 'axios';

const {
  REACT_APP_MOVIE_API_KEY,
  REACT_APP_MOVIE_API_URL,
  REACT_APP_MOVIE_IMAGE_URL,
} = process.env;

export interface Movie {
  title: string;
  overview: string;
  imageUrl: string;
  adult: boolean;
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
}
interface MovieResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `${REACT_APP_MOVIE_API_URL}/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&query=${query}`
    );
    const results = response.data.results;
    return results.map((result: MovieResponse) => dataSelector(result));
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

const dataSelector = (result: MovieResponse): Movie => {
  console.log(result);
  return {
    imageUrl: REACT_APP_MOVIE_IMAGE_URL + result.poster_path,
    ...result,
  };
};
