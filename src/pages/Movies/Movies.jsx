import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import * as API from '../../services/api';

export const Movies = () => {
  const movies = API.getSearch();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const visibleMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(movieName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={movieName} onChange={updateQueryString} />
    </main>
  );
};
