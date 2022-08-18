import { nanoid } from 'nanoid';
import Container from './Container';
import AppContainer from './AppContainer';
import ContactsForm from "./ContactsForm";
import ContactList from './ContactList';
import ContactsFilter from './ContactsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, filterContacts } from 'redux/selector';
import { addItem } from 'redux/ContactSlice';


const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContact);
  const filter = useSelector(filterContacts);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    const findContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert('This name is already in contact')
      : dispatch(addItem(contact))
  }

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <AppContainer title="Phonebook">
      <Container title='Add Contacts:'>
        <ContactsForm onSubmit={addContact} />
      </Container>
      <Container title='Contacts:'>
        <ContactsFilter />
        <ContactList contacts={visibleContacts} />
      </Container>
    </AppContainer>
  );
}

export default App;