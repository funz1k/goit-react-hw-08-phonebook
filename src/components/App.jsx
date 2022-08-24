import Container from './Container';
import AppContainer from './AppContainer';
import ContactsForm from "./ContactsForm";
import ContactList from './ContactList';
import ContactsFilter from './ContactsFilter';
import { useState } from 'react';
import { useGetContactsQuery, useCreateContactMutation } from 'redux/ContactSlice'

const App = () => {

  const [filter, setFilter] = useState('');
  const [createContact] = useCreateContactMutation();
  const { data, isFetching } = useGetContactsQuery();

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const addContact = (name, number) => {
    const contact = {
      name,
      number,
    }
    const findContact = data.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert('This name is already in contact')
      : createContact(contact);
  }

  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    if (data) {
      if (data.length !== 0) {
        return data.filter(contact =>
          contact.name.toLowerCase().includes(normalizeFilter)
        );
      }
    }
    return;
  };

  return (
    <AppContainer title="Phonebook">
      <Container title='Add Contacts:'>
        <ContactsForm onSubmit={addContact} />
      </Container>
      <Container title='Contacts:'>
        <ContactsFilter filter={filter} onChange={changeFilter} />
        {isFetching ? (<p>Loading ...</p>) : <ContactList contacts={visibleContacts()} />}
      </Container>
    </AppContainer>
  );
}

export default App;