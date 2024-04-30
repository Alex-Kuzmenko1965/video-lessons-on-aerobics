import Container from 'components/Container/Container';
import cl from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <Container>
        <p className={cl.footer__text}>React PhoneBook</p>
      </Container>
    </footer>
  );
};

export default Footer;