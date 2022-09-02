import { PropTypes } from 'prop-types';
import { ListItem, Contact, CloseBtn, ContactName, ContactNumber } from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contacts/ContactSlice'

const ContactList = ({ contacts }) => {
    const [deleteContact] = useDeleteContactMutation();
    return (
        <div>
            <ul>
                {contacts && contacts.map(({ name, number, id }) => {
                    return (
                        <ListItem key={id}>
                            <Contact>
                                <ContactName>{name}:</ContactName>
                                <ContactNumber>{number}</ContactNumber>
                            </Contact>
                            <CloseBtn type="button" onClick={() => deleteContact(id)}>
                                Delete
                            </CloseBtn>
                        </ListItem>
                    )
                })}
            </ul>
        </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
};

export default ContactList;