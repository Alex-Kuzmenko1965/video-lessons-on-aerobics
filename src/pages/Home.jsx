import { useState, useEffect } from 'react';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import MoviesList from '../components/MovieList/MovieList';
import { getTrendingMovies } from '../services/MovieAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await getTrendingMovies();
        // setTrendingMovies(response.results);
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h2>Welcome to the Video lessons</h2>
          <MoviesList movies={trendingMovies} />
        </Container>
      </Section>
    </main>
  );
};

export default Home;