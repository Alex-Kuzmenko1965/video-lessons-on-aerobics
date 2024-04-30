import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import { LogInForm } from '../components/LogInForm/LogInForm';

const LogIn = () => {
  return (
    <main>
        <Container>
          <Section title="LogIn Form">
            <LogInForm />
          </Section>
        </Container>
    </main>
  );
};

export default LogIn;