// import { useState, useEffect } from 'react';
import * as API from '../../services/api';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
// import { Link, Outlet } from 'react-router-dom';

export const Movies = () => {
  const movies = API.getDetails();
  return (
    <main>
      <MovieDetails movies={movies} />
    </main>
  );
};
