import { PropTypes } from 'prop-types';

const ContactsFilter = ({ filter, onChange }) => (
    <label htmlFor="">
        <input
            type="text"
            placeholder="Find contacts by name"
            value={filter}
            onChange={onChange} />
    </label>
)

ContactsFilter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
};

export default ContactsFilter;