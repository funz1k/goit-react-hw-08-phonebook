import { PropTypes } from 'prop-types';
import { ListItem, Contact, CloseBtn, ContactName, ContactNumber } from './ContactList.styled';

const ContactList = ({ contacts, removeContact }) => (
    <div>
        <ul>
            {contacts.map(({ name, number, id }) => {
                return (
                    <ListItem key={id}>
                        <Contact>
                            <ContactName>{name}:</ContactName>
                            <ContactNumber>{number}</ContactNumber>
                        </Contact>
                        <CloseBtn type="button" onClick={() => removeContact(id)}>
                            Delete
                        </CloseBtn>
                    </ListItem>
                )
            })}
        </ul>
    </div>
)

ContactList.propTypes = {
    contacts: PropTypes.array,
    onRemoveContact: PropTypes.func,
};

export default ContactList;