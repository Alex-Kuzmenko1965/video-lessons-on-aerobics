import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import MovieInform from '../components/MovieInform/MovieInform';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { getMovieById } from '../services/MovieAPI';
import cl from './MoviesDetails.module.css';
import noFound from '../assets/not-found.jpg';
import { UseAuth } from 'components/hooks/useAuth';

const MoviesDetails = () => {
  const { isLoggedIn } = UseAuth();
  console.log(isLoggedIn);
  const styles = {
    marginTop: '30px',
    fontSize: '24px',
    fontWeight: 700,
  };

  const [movieInform, setMovieInform] = useState(null);
  const { movieId } = useParams();
  // console.log(useParams());  
  const location = useLocation();  
  // console.log('location.state:', location.state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieById(movieId);
        setMovieInform(response);
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieInform) {
    return;
  }

  const { poster_path, title, id, vote_average, overview, genres } =
    movieInform;

  const navLinkClassName = ({ isActive }) =>
    isActive ? cl.active : cl.nav_link;

  return (
    <main>
      <Section>
        <Container>
          <MovieInform
            posterPath = {poster_path
                ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                : noFound}
            title={title}
            popularity={vote_average}
            overview={overview}
            genres={
              genres && genres.length > 0
                ? genres.map(({ name }) => name).join(', ') + '.'
                : ''
            }
          ></MovieInform>
            <div>
              {isLoggedIn ? (<ContactForm 
                title={title}
                id={id}
                state={location.state}
                className={navLinkClassName}
              >
              </ContactForm>) : <h3>Registration is required to purchase videos</h3> }
            </div>
        </Container>
      </Section>
      <Suspense
        fallback={
          <Container>
            <div style={styles}>Loading page...</div>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;