import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MovieList/MovieList';
import { getSearchMovies } from '../services/MovieAPI';


const Movies = () => {
  const styles = {
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 700,
  };

  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams] = useSearchParams();

  const movieName = searchParams.get('name');

  useEffect(() => {
    if (!movieName) return;
    
    const fetchData = async () => {
      try {
        const { results } = await getSearchMovies(movieName);
        setSearchMovies(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [movieName]);

  return (
    <main>
      <Section>
        <Container>
          <h1>Search lesson</h1>
          <SearchBar></SearchBar>
          {searchMovies && searchMovies.length > 0 ? (
            <MoviesList movies={searchMovies} />
          ) : searchMovies && searchMovies.length === 0 ? (
            <p style={styles}>Not found any movies</p>
          ) : (
            ''
          )}          
        </Container>
      </Section>
    </main>
  );
};

export default Movies;