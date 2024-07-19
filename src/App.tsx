import React from 'react';
import './App.css';
import { PrimarySearchAppBar, MovieCard } from './components';
import { MovieList } from './components/MovieList';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <MovieList />
    </div>
  );
}

export default App;
