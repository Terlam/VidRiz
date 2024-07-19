import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Fullscreen, MovieCreation } from '@mui/icons-material';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../api/tmdb';
import { RootState } from '../../redux/store';
import { mockMovieData } from '../../mockData/moviecards';

export const MovieList: React.FC = () => {
  const movies = useSelector((state: RootState) => {
    console.log(state);
    return state.movies.movies;
  });

  // movies.sort((a, b) => b.vote_average - a.vote_average);

  return (
    <Box sx={{ display: 'flex', margin: '20px', flexWrap: 'wrap' }}>
      {movies.map((movie: Movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          reviewSnippet={movie.overview}
          imageUrl={movie.imageUrl}
          rating={movie.vote_average}
        />
      ))}
    </Box>
  ); // Render your movies
};
