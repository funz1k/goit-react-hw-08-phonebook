import { PropTypes } from 'prop-types';

const ContactList = ({ contacts, removeContact }) => (
    <div>
        <ul>
            {contacts.map(({ name, number, id }) => {
                return (
                    <li key={id}>
                        <p>
                            {name}:{number}
                        </p>
                        <button type="button" onClick={() => removeContact(id)}>
                            x
                        </button>
                    </li>
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