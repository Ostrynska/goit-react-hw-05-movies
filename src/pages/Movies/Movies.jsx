import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Main, MoviesSection } from './Movie.styled';
import { MovieList } from '../../components/MovieList/MovieList';
import * as API from '../../services/api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearch = searchParams.get('query');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movieSearch) return;

    async function renderMovie() {
      try {
        const { results } = await API.getSearch(movieSearch);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    renderMovie();
  }, [movieSearch]);

  console.log(movies);
  return (
    <Main>
      <MoviesSection>
        <SearchBox
          value={query}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {movies && <MovieList movies={movies} />}
      </MoviesSection>
    </Main>
  );
};
