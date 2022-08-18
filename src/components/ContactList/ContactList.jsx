import { PropTypes } from 'prop-types';
import { ListItem, Contact, CloseBtn, ContactName, ContactNumber } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/ContactSlice';

const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();

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
                            <CloseBtn type="button" onClick={() => dispatch(removeContact(id))}>
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