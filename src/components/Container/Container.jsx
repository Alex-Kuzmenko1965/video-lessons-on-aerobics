import PropTypes from 'prop-types';
import cl from './Container.module.css';

const Container = ({ children }) => {
  return <div className={cl.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};