import { useState, useEffect } from 'react';
import { getTrending } from '../../services/api';

export const FilmCard = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');
    renderFilmCard();
  }, []);

  const renderFilmCard = async () => {
    try {
      const { results } = await getTrending();
      console.log(results);
      setTrending(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {trending.map(
        ({
          title,
          id,
          poster_path,
          release_date,
          vote_average,
          overview,
          genre_ids,
        }) => (
          <>
            <div>
              <img
                src={'https://image.tmdb.org/t/p/w500' + poster_path}
                alt={title}
              />
              <h3>
                {title} ({release_date})
              </h3>
              <p>User Score: {vote_average}</p>
              <h4>Overview</h4>
              <p>{overview}</p>
              <h4>Genres</h4>
              {genre_ids.map(({ name }) => (
                <p>{name}</p>
              ))}
            </div>

            <div>
              <p>Additional Information</p>
            </div>
          </>
        )
      )}

      {/* <h1>Trending movies</h1> */}
      {/* <ul>
        {trending.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul> */}
    </div>
  );
};
