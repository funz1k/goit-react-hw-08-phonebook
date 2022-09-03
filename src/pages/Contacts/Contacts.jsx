import Container from 'components/Container';
import ContactsForm from "components/ContactsForm";
import ContactList from 'components/ContactList';
import ContactsFilter from 'components/ContactsFilter';
import { LineWave } from 'react-loader-spinner';
import { useState } from 'react';
import { useGetContactsQuery, useCreateContactMutation } from 'redux//contacts/ContactSlice'

const Contacts = () => {
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
        <>
            <Container title='Add Contact'>
                <ContactsForm onSubmit={addContact} />
            </Container>
            <Container title='Contacts'>
                <ContactsFilter filter={filter} onChange={changeFilter} />
                {isFetching ? (<LineWave width="300" height="200" color="#1976d2" />) : <ContactList contacts={visibleContacts()} />}
            </Container>
        </>
    );
};

export default Contacts;