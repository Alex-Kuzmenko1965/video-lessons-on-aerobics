// import { useSelector } from 'react-redux'
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
// import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
// import { selectIsLoading, selectError } from '../redux/contacts/selectors';

const Contacts = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <main>
      <Container>
        <Section title="My Lessons">
          {/* <Filter />
          {isLoading && !error && <b>Request in progress...</b>} */}
          <ContactList />
        </Section>
      </Container>
    </main>
  );
};

export default Contacts;