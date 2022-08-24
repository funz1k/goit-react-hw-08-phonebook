import { PropTypes } from 'prop-types';
import { Filter, FilterLabel } from './ContactsFilter.styled'

const ContactsFilter = ({ filter, onChange }) => {

    return (
        <FilterLabel htmlFor="">
            <Filter
                type="text"
                placeholder="Find contacts by name"
                value={filter}
                onChange={onChange} />
        </FilterLabel>
    )
}

ContactsFilter.propTypes = {
    filter: PropTypes.string,
};

export default ContactsFilter;