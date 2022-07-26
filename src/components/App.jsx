import { useState } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import AppContainer from './AppContainer';
import ContactsForm from "./ContactsForm";
import ContactList from './ContactList';
import ContactsFilter from './ContactsFilter';
import useLocalStorage from "../hooks/useLocalStorage";
import contactsData from '../data/contacts.json'


const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', contactsData);
  const [filter, setFilter] = useState('');

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
      : setContacts(state => [contact, ...state]);
  }

  const removeContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id))
  }

  const onFilterContact = e => {
    const { value } = e.currentTarget;

    setFilter(value)
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
        <ContactsFilter filter={filter} onChange={onFilterContact} />
        <ContactList contacts={visibleContacts} removeContact={removeContact} />
      </Container>
    </AppContainer>
  );
}

export default App;