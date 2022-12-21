import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

export const MovieDetails = ({ movies }) => {
  return (
    <main>
      <button type="button">Go back</button>
      {/* {movies.map(
        ({
          title,
          id,
          poster_path,
          release_date,
          popularity,
          overview,
          genres,
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
              <p>User Score: {popularity}</p>
              <h4>Overview</h4>
              <p>{overview}</p>
              <h4>Genres</h4>
              {genres.map(({ name }) => (
                <p>{name}</p>
              ))}
            </div>
            <div>
              <p>Additional Information</p>
            </div>
          </>
        )
      )} */}
    </main>
  );
};
