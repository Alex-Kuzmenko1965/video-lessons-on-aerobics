import PropTypes from 'prop-types';
import cl from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={cl.section}>
      {title && <h1 className={cl.section__title}>{title}</h1>}{children}
    </section>
    );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;