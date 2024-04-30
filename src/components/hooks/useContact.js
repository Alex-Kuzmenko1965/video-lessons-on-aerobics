import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  
  return {
    contacts,
    visibleContacts,
    error,
    isLoading,
  };
};