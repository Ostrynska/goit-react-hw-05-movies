import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as API from '../../services/api';

import {
  ReviewsSection,
  ReviewsListWrapp,
  ReviewsListItem,
  ReviewsAuthor,
  Text,
} from './Reviews.styled';

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
    return <h2>There are yet no reviews for this movie</h2>;
  }

  return (
    <ReviewsSection>
      <ReviewsListWrapp>
        {reviews.map(({ author, content, id }) => {
          return (
            <ReviewsListItem key={{ id }}>
              <ReviewsAuthor>Author: {author}</ReviewsAuthor>
              <Text>{content}</Text>
            </ReviewsListItem>
          );
        })}
      </ReviewsListWrapp>
    </ReviewsSection>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
