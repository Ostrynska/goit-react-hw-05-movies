import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastSection,
  CastListWrapp,
  CastListItem,
  CastImageWrapp,
  CastImage,
  TextWrapp,
  Text,
  TextAccent,
} from '../Cast/Cast.styled';
import defaultCastImage from '../../images/cast.jpg';
import * as API from '../../services/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

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
    <CastSection>
      <CastListWrapp>
        {cast &&
          cast.map(({ profile_path, name, character, id }) => {
            return (
              <CastListItem key={{ id }}>
                <CastImageWrapp>
                  <CastImage
                    src={
                      profile_path
                        ? `${baseURL}${profile_path}`
                        : defaultCastImage
                    }
                    alt={name}
                  />
                </CastImageWrapp>
                <TextWrapp>
                  <TextAccent>{name}</TextAccent>
                  <Text>Character: {character}</Text>
                </TextWrapp>
              </CastListItem>
            );
          })}
      </CastListWrapp>
    </CastSection>
  );
};
