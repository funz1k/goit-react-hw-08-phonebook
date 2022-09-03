import { PropTypes } from 'prop-types';
import { ListItem, CloseBtn, ContactName, ContactNumber, ListContainer } from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contacts/ContactSlice'

const ContactList = ({ contacts }) => {
    const [deleteContact] = useDeleteContactMutation();
    return (
        <ListContainer>
            {contacts && contacts.map(({ name, number, id }) => {
                return (
                    <ListItem key={id}>
                        <ContactName>{name}</ContactName>
                        <ContactNumber>{number}</ContactNumber>
                        <CloseBtn type="button" onClick={() => deleteContact(id)}>
                            Delete
                        </CloseBtn>
                    </ListItem>
                )
            })}
        </ListContainer>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
};

export default ContactList;