import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import css from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log('location:', location);  

  return (
    <ul className={css['movies-list']}>
      {movies.map( ({ id, title }) => (
        <li className={css['movies-list-item']} key={id}>
          {console.log({ id, title })}
          <Link
            className={css['movies-list-link']}
            to={`/movies/${id}`}
            state={location}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;