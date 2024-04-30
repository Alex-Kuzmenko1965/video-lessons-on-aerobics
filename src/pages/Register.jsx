import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

const Register = () => {
  return (
    <main>
      <Container>
        <Section title="Registration Form">
          <RegistrationForm />
        </Section>
      </Container>
    </main>
  );
};

export default Register;