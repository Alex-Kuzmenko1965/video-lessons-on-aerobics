// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import Container from '../Container/Container';
import Section from '../Section/Section';
// import { getMovieReviews } from '../../services/MovieAPI';
// import cl from './Previews.module.css';
import proba from '../../assets/video/proba.mp4';

const Reviews = () => {
  // const [reviews, setReviews] = useState(null);
  // const { movieId } = useParams();

  // useEffect(() => {
  //   const fetchReviewsData = async () => {
  //     try {
  //       const response = await getMovieReviews(movieId);
  //       setReviews(response.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchReviewsData();
  // }, [movieId]);

  // if (!reviews) {
  //   return;
  // }

  return (
    <Section>
      <Container>
        <iframe
          class="about-vid"
          width="180"
          height="320"
          src={proba}
          // width="224"
          // height="199"
          // src="https://www.youtube.com/embed/8WEMZ86Eho8"
          title="YouTube video player"
          frameborder="0"
          // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen >
        </iframe>
      </Container>
    </Section>
  );
};

export default Reviews;