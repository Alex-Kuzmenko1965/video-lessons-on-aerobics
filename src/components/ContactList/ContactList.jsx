import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { deleteContact } from '../../redux/contacts/operations';
import { useContacts } from '../../components/hooks/useContact';

export const ContactList = () => {  
  const dispatch = useDispatch();
  const { visibleContacts } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
    {visibleContacts.map(({ id, name, number }) => (
    <li key = {id}>{name}: {number}
    <button type = "button" onClick = {() => dispatch(deleteContact(id))}>Delete</button>
    </li>))}
    </ul>
  );
}