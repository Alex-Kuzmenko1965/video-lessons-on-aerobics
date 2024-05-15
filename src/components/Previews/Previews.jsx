import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../Container/Container';
import Section from '../Section/Section';
import { getMovieReviews } from '../../services/MovieAPI';
import cl from './Previews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviewsData();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <Section>
      <Container>
        <ul className={cl.reviews_list}>
          {reviews.length === 0 ? (
            <p className={cl.not_found}>Not found any review</p>
          ) : (
            reviews.map(({ author, content, id }) => (
              <li className={cl.reviews_list_item} key={id}>
                <p className={cl.reviews_author}>Author: {author}</p>
                <p className={cl.reviews_text}>{content} </p>
              </li>
            ))
          )}
        </ul>
      </Container>
    </Section>
  );
};

export default Reviews;