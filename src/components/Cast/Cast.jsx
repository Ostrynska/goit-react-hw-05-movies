import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    renderMovieCast();
  }, []);

  const renderMovieCast = async () => {
    try {
      const results = await API.getCast(id);
      setCast(results);
    } catch (error) {
      console.log(error);
    }
  };

  if (!cast || cast.length === 0) return;

  return (
    <section>
      <ul>
        {cast &&
          cast.map(({ profile_path, name, character, id }) => {
            return (
              <li key={{ id }}>
                <img
                  src={'https://image.tmdb.org/t/p/w200' + profile_path}
                  alt={name}
                />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
