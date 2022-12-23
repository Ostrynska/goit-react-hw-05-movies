import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    renderMovieReviews();
  }, []);

  const renderMovieReviews = async () => {
    try {
      const results = await API.getReviews(id);
      console.log(results);
      setReviews(results);
    } catch (error) {
      console.log(error);
    }
  };

  if (!reviews) {
    return (
      <>
        <p>There is no reviews yet</p>
      </>
    );
  }

  return (
    <section>
      <ul>
        {reviews &&
          reviews.map(({ author, content, id }) => {
            return (
              <li key={{ id }}>
                <h5>Author: {author}</h5>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
